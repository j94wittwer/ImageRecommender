import numpy as np
from PIL import Image
from feature_extractor import FeatureExtractor
from datetime import datetime
from flask import Flask, render_template, request
from pathlib import Path

app = Flask(__name__, template_folder="./templates")

# Read img features -> extract similars
fe = FeatureExtractor()
features = []
img_paths = []
for feature_path in Path("./static/feature").glob("*.npy"):
    features.append(np.load(feature_path))
    img_paths.append(Path("./static/img") / (feature_path.stem + ".jpg"))
features = np.array(features)


def get_file_names(file_list):
    file_names = []
    for file in file_list:
        file_names.append(file[1].name)
    return file_names


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        file = request.files["query_img"]
        file_name = file.filename

        # Save query_img
        img = Image.open("./static/img/" + file_name)  # create PIL image from file_name
        uploaded_img_path = "static/uploaded/" + datetime.now().isoformat().replace(":", ".") + "_" + file.filename
        img.save(uploaded_img_path)

        # Run search
        query = fe.extract(img)
        dists = np.linalg.norm(features - query, axis=1)  # L2 distances to the features
        ids = np.argsort(dists)[1:5]  # Top n results
        scores = [(dists[id], img_paths[id]) for id in ids]

        file_names = get_file_names(scores)

        return render_template("index.html", query_path=uploaded_img_path, scores=scores)
    else:
        return render_template("index.html")


if __name__ == "__main__":
    app.run()
