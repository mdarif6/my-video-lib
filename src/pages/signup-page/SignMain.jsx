import React from "react";

export default function SignMain() {
  return (
    <div className="v-login-window">
      <div className="v-login-container">
        <h2>Sign up</h2>
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
              <label for="consent">I accept all terms & conditions</label>
            </div>
          </div>
          <a href="#">
            <button className="btn btn-primary">Create New Account</button>
          </a>

          <div className="login-bottom-text">
            Already have an account <i className="fas fa-chevron-right"></i>
          </div>
        </form>
      </div>
    </div>
  );
}
