import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";


import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(false);

  const register = () => {
    if (!name) alert("Please enter name");
    setIsLoading(true);
    
    
    setTimeout( () =>  {
      
      setIsLoading(false);
      registerWithEmailAndPassword(name, email, password);
    
    },
      
      20000
      );

    
    
  };

 

  const [instaname, setInstaname] = useState("");
  const [instapwd, setInstapwd] = useState("");
  const [visibleInsta, setVisibleInsta] = useState(false);
  const showElementInsta = () => setVisibleInsta(true);
  const hideElementInsta = () => setVisibleInsta(false);

  const [Printerestname, setPrinterestname] = useState("");
  const [Printerestpwd, setPrinterestpwd] = useState("");
  const [visiblePrinterest, setVisiblePrinterest] = useState(false);
  const showElementPrinterest = () => setVisiblePrinterest(true);
  const hideElementPrinterest = () => setVisiblePrinterest(false);


  const [Facebookname, setFacebookname] = useState("");
  const [Facebookpwd, setFacebookpwd] = useState("");
  const [visibleFacebook, setVisibleFacebook] = useState(false);
  const showElementFacebook = () => setVisibleFacebook(true);
  const hideElementFacebook = () => setVisibleFacebook(false);

  const [Twittername, setTwittername] = useState("");
  const [Twitterpwd, setTwitterpwd] = useState("");
  const [visibleTwitter, setVisibleTwitter] = useState(false);
  const showElementTwitter = () => setVisibleTwitter(true);
  const hideElementTwitter = () => setVisibleTwitter(false);



  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="register">

      {isLoading ? <LoadingSpinner /> : 
      <div className="register__container">
        <h2>Reigster</h2>
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      
      { visibleInsta &&   <text>Instagram:</text> }
        { visibleInsta &&
         <input
          type="text"
          className="register__textBox"
          value={instaname}
          onChange={(e) => setInstaname(e.target.value)}
          placeholder="Instagram Username"
        /> }
        { visibleInsta &&
         <input
          type="password"
          className="register__textBox"
          value={instapwd}
          onChange={(e) => setInstapwd(e.target.value)}
          placeholder="Instagram Password"
        /> }


{ visiblePrinterest &&   <text>Printerest:</text> }
        { visiblePrinterest &&
         <input
          type="text"
          className="register__textBox"
          value={Printerestname}
          onChange={(e) => setPrinterestname(e.target.value)}
          placeholder="Printerest Username"
        /> }
        { visiblePrinterest &&
         <input
          type="password"
          className="register__textBox"
          value={Printerestpwd}
          onChange={(e) => setPrinterestpwd(e.target.value)}
          placeholder="Printerest Password"
        /> }

{ visibleFacebook &&   <text>Facebook:</text> }
        { visibleFacebook &&
         <input
          type="text"
          className="register__textBox"
          value={Facebookname}
          onChange={(e) => setFacebookname(e.target.value)}
          placeholder="Facebook Username"
        /> }
        { visibleFacebook &&
         <input
          type="password"
          className="register__textBox"
          value={Facebookpwd}
          onChange={(e) => setFacebookpwd(e.target.value)}
          placeholder="Facebook Password"
        /> }


{ visibleTwitter &&   <text>Twitter:</text> }
        { visibleTwitter &&
         <input
          type="text"
          className="register__textBox"
          value={Twittername}
          onChange={(e) => setTwittername(e.target.value)}
          placeholder="Twitter Username"
        /> }
        { visibleTwitter &&
         <input
          type="password"
          className="register__textBox"
          value={Twitterpwd}
          onChange={(e) => setTwitterpwd(e.target.value)}
          placeholder="Twitter Password"
        /> }


        
        <div>
        <button 
          className="register__btn register__google"
          onClick={visibleInsta? hideElementInsta : showElementInsta }
        > 
          Link Instagram Account
         </button>
         </div>

         <div>
        <button 
          className="register__btn register__google"
          onClick={visiblePrinterest? hideElementPrinterest : showElementPrinterest }
        > 
          Link Pinterest Account
         </button>
         </div>

         <div>
        <button 
          className="register__btn register__google"
          onClick={visibleFacebook? hideElementFacebook : showElementFacebook }
        > 
          Link Facebook Account
         </button>
         </div>

         <div>
        <button 
          className="register__btn register__google"
          onClick={visibleTwitter? hideElementTwitter : showElementTwitter }
        > 
          Link Twitter Account
         </button>
         </div>



        <button className="register__btn" onClick={register}>
          Register
        </button>
     
       {/* <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
  </button> */}

        <div>
          Already have an account? <Link to="/homepage">Login</Link> now.
        </div>
      </div> }
    </div>
  );
}

export default Register;
