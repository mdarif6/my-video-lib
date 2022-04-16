import card_img from "../../assets/images/card_image.jpg";
import React from "react";
import { useVideo } from "../../context/video-context";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function VideoCard({ item }) {
  const { state, dispatch } = useVideo();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="v-card card-ecom">
      <img src={item.thumbnail_url} alt="video_thumbnail" />
      <div className="card-product-bottom">
        <div className="card-details">
          <div className="v-product-icon-wraper">
            <p className="v-card-product-name">{item.title}</p>
            <div className="v-card-ellipsis">
              <i
                className="fas fa-ellipsis-v"
                onClick={() => setShowMenu(!showMenu)}
              ></i>
            </div>
          </div>
          {showMenu && (
            <div className="v-card-menu-wrapper">
              <div className="v-card-menu">
                <div className="v-card-icons-with-menu">
                  <div>
                    <i class="far fa-clock"></i>
                  </div>
                  <div>Save to watch later</div>
                </div>
                <div className="v-card-icons-with-menu">
                  <div>
                    <i class="fas fa-play"></i>
                  </div>
                  <div>Save to playlist</div>
                </div>
                <div className="v-card-icons-with-menu">
                  <div>
                    <i class="fas fa-share"></i>
                  </div>
                  <div>Share</div>
                </div>
              </div>
            </div>
          )}
          <p className="card-subtitle v-card-product-desc">
            6K Views | 4 hours ago
          </p>
        </div>

        <Link to={`/video/${item._id}`}>
          <button
            className="card-foot-btn card-btn-ecom"
            onClick={() => dispatch({ type: "PLAY_VIDEO", payload: item })}
          >
            Watch this video
          </button>
        </Link>
      </div>
    </div>
  );
}
