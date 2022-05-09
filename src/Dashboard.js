import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import "./styles.css";
import images from "./images.json";
import Rating from "./Rating";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {

const [likedBands, updateLikedBands] = React.useState([]);

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
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
    {images.map(image => (
        <Rating
          key={image.youtubeId}
          band={image}
          updateLikedBands={updateLikedBands}
          likedBands={likedBands}
        />
      ))}

<h2>Liked images</h2>
      <ul>
        {likedBands.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
