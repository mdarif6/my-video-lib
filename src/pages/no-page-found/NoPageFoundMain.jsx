import React from "react";
import "./NoPageFound.css";
import errorimage from "../../assets/images/Error 404.png";
import { Link } from "react-router-dom";
export default function NoPageFoundMain() {
  return (
    <div>
      <div className="v-error-page">
        <img src={errorimage} alt="error-image" />
      </div>
      <div className="v-error-msg">
        <h3>Sorry, this page isn't available</h3>
        <small>
          The link you followed may be broken, or the page may have been
          removed.
        </small>

        <Link className="link-style" to="/">
          <p className="main-heading">
            Go back to MyTv<span>18</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
