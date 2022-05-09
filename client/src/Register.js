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

  const [Printerestname, setPrinterestname] = useState("");
  const [Printerestpwd, setPrinterestpwd] = useState("");
  const [visiblePrinterest, setVisiblePrinterest] = useState(false);
  const showElementPrinterest = () => setVisiblePrinterest(true);


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


        
        <div>
        <button 
          className="register__btn register__google"
          onClick={showElementInsta}
        > 
          Link Instagram Account
         </button>
         </div>

         <div>
        <button 
          className="register__btn register__google"
          onClick={showElementPrinterest}
        > 
          Link Pinterest Account
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
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div> }
    </div>
  );
}

export default Register;
