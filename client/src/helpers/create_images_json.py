import json
from os import listdir
from os.path import join, isfile


def extract_img_names(path="./imgs_for_AI_Law"):
    return [f for f in listdir(path) if isfile(join(path, f))]
    
with open('images.json', 'w') as file:
    print("Created Json File")
    file_names = extract_img_names()
    img_list = []
    counter = 0
    platforms = ["Instagram", "Facebook", "Twitter", "Pinterest"]

    for name in file_names:
        json_object = {
            "name": name,
            "source": platforms[counter]
        }
        img_list.append(json_object)

        if counter < 3:
            counter += 1
        else:
            counter = 0
    
    json_list = json.dumps(img_list, indent=2)
    file.write(json_list)
    file.close()
