import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Config";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
    console.log(auth.currentUser);
  };
  
  return (
    <div>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setpassword(e.target.value)} />
      <button onClick={handleSubmit}>sign in</button>
    </div>
  );
};

export default Auth;
