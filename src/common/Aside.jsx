import React from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <div className="v-aside">
      <div className="v-aside-content">
        <div className="v-aside-content-and-icons">
          <Link className="link-style link-menu" to="/">
            <div className="v-aside-icon">
              <i className="fas fa-home"></i>
            </div>
            <div className="v-aside-link">Home</div>
          </Link>
        </div>
        <div className="v-aside-content-and-icons">
          <Link className="link-style  link-menu" to="/history">
            <div>
              <i className="fas fa-history"></i>
            </div>

            <div className="v-aside-link">History</div>
          </Link>
        </div>
        <div className="v-aside-content-and-icons">
          <Link className="link-style link-menu" to="/watchlater">
            <div>
              <i className="far fa-clock"></i>
            </div>

            <div className="v-aside-link">Watch Later</div>
          </Link>
        </div>
        <div className="v-aside-content-and-icons">
          <Link className="link-style link-menu" to="/like">
            <div>
              <i className="far fa-thumbs-up"></i>
            </div>

            <div className="v-aside-link">Liked Videos</div>
          </Link>
        </div>
        <div className="v-aside-content-and-icons">
          <Link className="link-style link-menu" to="/playlist">
            <div>
              <i className="fas fa-play"></i>
            </div>

            <div className="v-aside-link">Play List</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
