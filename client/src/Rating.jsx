import React, {useState} from "react";
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';
import "./Images.css"

const Rating = props => {
    const {name, source} = props.imageInfo;
    const [isLiked, updateLike] = useState(false);
    const[placeholder, setPlaceholder] = useState("Dummy");
    const handleLike = async () => {
        let currentLikedBands = props.likedBands;

        await props.handleLike(name);

        if (!isLiked) {
            updateLike(true);
            if (!currentLikedBands.includes(name))
                props.updateLikedBands([...currentLikedBands, name]);
        } else {
            updateLike(false);
            if (currentLikedBands.includes(name))
                props.updateLikedBands(currentLikedBands.filter(band => band !== name));
        }

    {/* setTimeout(function () {
            console.log("3 sec")
        }, 7000);

    setPlaceholder("Dummy1");    */}

    };

    return (


        <div className="base-demo">

            <ImageShadow


                title={name}
                width="420"
                shadowHover

               // height="315"

                src={`Images/${name}`}
                //src={`https://i.imgur.com/DhZUThn.jpg`}


            />
            <div
                style={{
                    paddingBottom: 5,
                    paddingTop: 70
                }}
            >
                <button onClick={handleLike} disabled={isLiked} > Like
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