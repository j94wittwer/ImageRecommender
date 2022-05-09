import React, { useState } from "react";






const Rating = props => {
    const { name, source, youtubeId } = props.band;
    const [isLiked, updateLike] = useState(false);
  
    const handleLike = () => {
      let currentLikedBands = props.likedBands;
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
             
          src={`Images/${youtubeId}-unsplash.jpg`}
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
        <hr />
      </div>
    );
  };
  
  export default Rating;