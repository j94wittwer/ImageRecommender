from pathlib import Path

import numpy as np
from PIL import Image
from flask import Flask, request
from flask_cors import cross_origin

from feature_extractor import FeatureExtractor

app = Flask(__name__, template_folder="./templates")

# Read img features -> extract similar imgs
featureExtractor = FeatureExtractor()
npy_images = []
img_paths = []
for file in Path("./static/feature").glob("*.npy"):
    npy_images.append(np.load(file))
    img_paths.append(Path("./static/img") / (file.stem + ".jpg"))
npy_images = np.array(npy_images)


def get_file_names(file_list):
    file_names = []
    for file in file_list:
        file_names.append(file[1].name)
    return file_names


# Route to retrieve similar images based on image name sent from frontend
# Returns list of names of similar images
@app.route("/similar", methods=["POST"])
@cross_origin()
def get_similar_images():
    if request.method == "POST":
        file_name = request.json.get("img")

        # Open sent image
        img = Image.open("./static/img/" + file_name)

        # Run search
        query = featureExtractor.extract(img)
        distances = np.linalg.norm(npy_images - query, axis=1)  # L2 distances to the features
        ids = np.argsort(distances)[1:3]  # Top n results
        scores = [(distances[i], img_paths[i]) for i in ids]

        file_names = get_file_names(scores)

        return {"similar_imgs": file_names}


if __name__ == "__main__":
    app.run()
