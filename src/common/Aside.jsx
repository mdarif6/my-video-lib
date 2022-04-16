import React from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <div className="v-aside">
      <div className="v-aside-content">
        <div className="v-aside-content-and-icons">
          <div>
            <i class="fas fa-home"></i>
          </div>
          <div className="v-aside-link">Home</div>
        </div>
        <div className="v-aside-content-and-icons">
          <Link className="link-style" to="/history">
            <div>
              <i class="fas fa-history"></i>
            </div>
          </Link>
          <div className="v-aside-link">History</div>
        </div>
        <div className="v-aside-content-and-icons">
          <div>
            <i class="far fa-clock"></i>
          </div>
          <div className="v-aside-link">Watch Later</div>
        </div>
        <div className="v-aside-content-and-icons">
          <div>
            <i class="far fa-thumbs-up"></i>
          </div>
          <div className="v-aside-link">Liked Videos</div>
        </div>
        <div className="v-aside-content-and-icons">
          <Link className="link-style" to="/playlist">
            <div>
              <i class="fas fa-play"></i>
            </div>
          </Link>
          <div className="v-aside-link">Play List</div>
        </div>
      </div>
    </div>
  );
}
