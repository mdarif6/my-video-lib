import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./LoginPage.css";

export default function LoginMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.encodedToken);
        navigate("/");
        dispatch({ type: "SET_AUTH", payload: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function loginAsGuest() {
    try {
      const response = await axios.post("api/auth/login", {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      });
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("authToken", response.data.encodedToken);
        navigate("/");
        dispatch({ type: "SET_AUTH", payload: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="v-main">
      <div className="v-login-window">
        <div className="v-login-container">
          <h2>Login</h2>
          <form action="inputs" onSubmit={submitHandler}>
            <div className="v-input-text">
              <label>Email address</label>
              <input
                type="text"
                placeholder="xyz@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="v-input-text">
              <label>Password</label>
              <input
                type="password"
                placeholder="***************"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a href="#">
              <button
                className={
                  email.length > 0 && password.length > 0
                    ? "btn btn-primary "
                    : "btn btn-primary disabled-btn"
                }
              >
                Login
              </button>
            </a>
            <a href="#">
              <button className="btn outline-primary" onClick={loginAsGuest}>
                Login as a guest
              </button>
            </a>
            <div className="login-bottom-text">
              <Link className="link-style" to="/signup">
                Create New Account <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
