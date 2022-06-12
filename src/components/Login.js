import React, { useState } from "react";
import "./login.css";
import av from "./image1.png"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handlesubmit = async (e) => {
    
    e.preventDefault()
    const response = await fetch(`https://vouch-backend-app.herokuapp.com/login`, {
      method: "POST",
  
      headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify({email:email,password:password}),
      
    });
    const json=await response.json();
 
    

    if(json.sucess){
      
       alert(`TOKEN : ${json.authtoken}`)

    }
    else{
 
      alert(`ERROR : ${json.errors[0].msg}`)
    }
  }
  return (
      <div className="login">
          
     
      <form className="loginbox" onSubmit={handlesubmit}>
        <h1 className="login-title">Welcome Back</h1>
        <p>sub-title text goes here</p>
        <div className="login-inputcontainer">
          <div>
            <label className="inp-component" htmlFor="username">
              <input
                placeholder="Email Address *"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp-component">
              <input
                placeholder="Password *"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="login-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Login
              </button>
              <div className="login-footer-desc">
                  <div className="rem-password">
                      <input type="checkbox" name="" id="" /><p>Remember Password</p>
                  </div>
                  <p>Forgot Password ?</p>
              </div>
          </form>
           <div className="right-login">
        <img src={av} alt="" />
      </div>
    </div>
  );
}