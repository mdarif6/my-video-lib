import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { useVideo } from "../context/video-context";

export default function Header() {
  const { state, dispatch } = useVideo();
  const { state: authState, dispatch: authDispatch } = useAuth();

  function logoutHandler() {
    localStorage.removeItem("authToken");
    authDispatch({ type: "SET_AUTH", payload: false });
  }

  return (
    <div className="v-header">
      <div className="v-logo">
        <Link className="link-style" to="/">
          MyTV <span>18</span>
        </Link>
      </div>

      <div className="v-search-and-button">
        <input
          className="v-search-box"
          type="search"
          placeholder="search your content here"
          onChange={(e) =>
            dispatch({ type: "ADD_SEARCHQUERY", payload: e.target.value })
          }
        />
        <button className="v-search-button" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="v-user-profile">
        {authState.isAuthenticated ? (
          <i className="fas fa-power-off" onClick={logoutHandler}></i>
        ) : (
          <Link className="link-style" to="/login">
            <button className="btn btn-primary-login">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}
