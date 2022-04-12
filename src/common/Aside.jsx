import React from "react";

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
          <div>
            <i class="fas fa-history"></i>
          </div>
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
      </div>
    </div>
  );
}
