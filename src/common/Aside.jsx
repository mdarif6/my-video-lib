import React from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <div className="v-aside">
      <div className="v-aside-content">
        <div className="v-aside-content-and-icons">
          <Link className="link-style link-menu" to="/">
            <div className="v-aside-icon">
              <i class="fas fa-home"></i>
            </div>
            <div className="v-aside-link">Home</div>
          </Link>
        </div>
        <div className="v-aside-content-and-icons">
          <Link className="link-style  link-menu" to="/history">
            <div>
              <i class="fas fa-history"></i>
            </div>

            <div className="v-aside-link">History</div>
          </Link>
        </div>
        <div className="v-aside-content-and-icons">
          <Link className="link-style link-menu" to="/watchlater">
            <div>
              <i class="far fa-clock"></i>
            </div>

            <div className="v-aside-link">Watch Later</div>
          </Link>
        </div>
        <div className="v-aside-content-and-icons">
          <Link className="link-style link-menu" to="/like">
            <div>
              <i class="far fa-thumbs-up"></i>
            </div>

            <div className="v-aside-link">Liked Videos</div>
          </Link>
        </div>
        <div className="v-aside-content-and-icons">
          <Link className="link-style link-menu" to="/playlist">
            <div>
              <i class="fas fa-play"></i>
            </div>

            <div className="v-aside-link">Play List</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
