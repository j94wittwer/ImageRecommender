import React, {useState} from "react";
import axios from "axios";

const Rating = props => {
    const {name, source, youtubeId} = props.band;
    const [isLiked, updateLike] = useState(false);

    const handleLike = () => {
        let currentLikedBands = props.likedBands;
        console.log(`${props.band.name}.jpg`);
        const data = {
            "img": props.band.name
        }
        // similar imgs are retrieved from server
        let similar_imgs = []
        axios.post(`http://127.0.0.1:5000/similar`, data)
            .then(response => {
                similar_imgs = response.data.similar_imgs
                console.log(similar_imgs)
            })
            .catch(e => console.log(e));

        if (!isLiked) {
            updateLike(true);
            if (!currentLikedBands.includes(name))
                props.updateLikedBands([...currentLikedBands, name]);
        } else {
            updateLike(false);
            if (currentLikedBands.includes(name))
                props.updateLikedBands(currentLikedBands.filter(band => band !== name));
        }
    };

    return (
        <div>
            <img
                title={name}
                width="420"
                height="315"

                src={`Images/${name}`}
                //src={`https://i.imgur.com/DhZUThn.jpg`}


            />
            <div
                style={{
                    paddingBottom: 10,
                    paddingTop: 10
                }}
            >
                <button onClick={handleLike} disabled={isLiked}> Like
                    {/*         <FontAwesomeIcon icon={faThumbsUp} style={{ paddingRight: 5 }} />   */}
                </button>
                <button onClick={handleLike} disabled={!isLiked}> Dislike
                    {/*        <FontAwesomeIcon icon={faThumbsDown} style={{ paddingLeft: 5 }} />   */}
                </button>
            </div>
            {/*    <p>You {isLiked ? "liked" : "disliked"} </p>
      */}
            <p>{isLiked ? "liked" : ""} </p>
            <h3>
                <p> source: {source}  </p>
                {/*   <p> source:  {song} by {name}  */}
            </h3>
            <hr/>
        </div>
    );
};

export default Rating;