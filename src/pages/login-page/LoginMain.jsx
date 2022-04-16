import React from "react";
import "./LoginPage.css";

export default function LoginMain() {
  return (
    <div className="v-login-window">
      <div className="v-login-container">
        <h2>Login</h2>
        <form action="inputs">
          <div className="v-input-text">
            <label>Email address</label>
            <input type="text" placeholder="xyz@email.com" />
          </div>

          <div className="v-input-text">
            <label>Password</label>
            <input type="password" placeholder="***************" />
          </div>
          <div className="login-check">
            <div className="login-check-label">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                value="remember"
              />
              <label for="consent">Remember me</label>
            </div>
            <div>
              <a href="#">Forgot Your Password ?</a>
            </div>
          </div>
          <a href="#">
            <button className="btn btn-primary">Login</button>
          </a>
          <a href="#">
            <button className="btn outline-primary">Login as a guest</button>
          </a>
          <div className="login-bottom-text">
            Create New Account <i className="fas fa-chevron-right"></i>
          </div>
        </form>
      </div>
    </div>
  );
}
