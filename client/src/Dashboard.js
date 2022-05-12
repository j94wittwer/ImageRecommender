import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import "./Dashboard.css";
import "./styles.css";
import images from "./images.json";
import Rating from "./Rating";
import {auth, db, logout} from "./firebase";
import {query, collection, getDocs, where} from "firebase/firestore";
import arrayShuffle from "array-shuffle";
import axios from "axios";
import async from "async";


function Dashboard() {

    const [likedBands, updateLikedBands] = React.useState([]);
    const[placeholder, setPlaceholder] = useState(1);
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const initialImages = arrayShuffle(images).slice(0, 5);
    const [currentImages, setCurrentImages] = useState({images: initialImages})
    let [counter, setCounter] = useState(0);

    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    const handleLike = async (name) => {
        const data = {
            "img": name
        }
        let similar_imgs = [];
        axios.post(`http://127.0.0.1:5000/similar`, data)
            .then(response => {
                similar_imgs = response.data.similar_imgs
                for (let i = 0; i < images.length; i++) {
                    if (similar_imgs.includes(images[i].name)) {
                        let current_names = currentImages.images.map(i => i.name)
                        if (!current_names.includes(images[i].name)) {
                            currentImages.images.push(images[i]);
                        }
                    }
                }

              {/*  setTimeout(function () {
                    console.log("3 sec")
                }, 7000);  */}
        
            setPlaceholder(placeholder + 1); 
            


            })
            .catch(e => console.log(e))


           
    };


    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");

        fetchUserName();
    }, [user, loading]);


    return (
        <div className="App">
            {/*   <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
  </div> */}
            <button className="dashboard__btn" onClick={logout}>
                Logout
            </button>
            <h1>Hi {name}! </h1>
            
            <h3>Based on your social media activity, we found the following images that you may like</h3>
           
            {currentImages.images.map(image => (
                <Rating
                    key={image.name}
                    imageInfo={image}
                    updateLikedBands={updateLikedBands}
                    likedBands={likedBands}
                    handleLike={handleLike}
                />
            ))}

  {/* 
            <h2>Liked images</h2>
            <ul>
                {likedBands.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
 */} 
            
        
         {/*   <button className="dashboard__btn">
                Show me further images based on my likes

            </button>
                            */} 
        </div>
    );
}

export default Dashboard;
