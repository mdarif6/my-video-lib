import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import axios from "axios";

export default function SignMain() {
  const [register, setRegister] = useState({ email: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  async function formSubmitHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", register);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("authToken", response.data.encodedToken);
        navigate("/");
        dispatch({ type: "SET_AUTH", payload: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleCheckBox() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="v-main">
      <div className="v-login-window">
        <div className="v-login-container">
          <h2>Sign up</h2>
          <form action="inputs" onSubmit={formSubmitHandler}>
            <div className="v-input-text">
              <label>Email address</label>
              <input
                type="text"
                placeholder="xyz@email.com"
                onChange={(e) =>
                  setRegister((prevState) => {
                    return { ...prevState, email: e.target.value };
                  })
                }
              />
            </div>

            <div className="v-input-text">
              <label>Password</label>
              <input
                type="password"
                placeholder="***************"
                onChange={(e) =>
                  setRegister((prevState) => {
                    return { ...prevState, password: e.target.value };
                  })
                }
              />
            </div>
            <div className="login-check">
              <div className="login-check-label">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  onChange={handleCheckBox}
                />
                <label for="consent">I accept all terms & conditions</label>
              </div>
            </div>
            <a href="#">
              <button
                className={
                  register.email.length > 0 &&
                  register.password.length > 0 &&
                  isChecked === true
                    ? "btn btn-primary "
                    : "btn btn-primary disabled-btn"
                }
              >
                Create New Account
              </button>
            </a>

            <div className="login-bottom-text">
              <Link className="link-style" to="/login">
                Already have an account <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
