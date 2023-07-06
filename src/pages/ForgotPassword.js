import React from "react";
import Navbar from "../components/Navbar";
import "../components/login.css";
import av from "../components/image1.png";

function ForgotPassword() {
  return (
    <div>
      <Navbar />
      <div className="login">
        <form className="loginbox">
          <h1 className="login-title">Forgot Password</h1>
          <p>no problem u can update it</p>
          <div className="login-inputcontainer">
            <div>
              <label className="inp-component" htmlFor="username">
                <input
                  placeholder="Email Address *"
                  className="login-input"
                  type="text"
                />
              </label>
            </div>
          </div>
          <button className="login-btn" type="submit">
            Get OTP
          </button>
        </form>
        <div className="right-login">
          <img src={av} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
