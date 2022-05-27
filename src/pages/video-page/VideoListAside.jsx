import React from "react";
import { Link, useParams } from "react-router-dom";
import { useVideo } from "../../context/video-context";
export default function VideoListAside() {
  const { state, dispatch } = useVideo();
  const { videoID } = useParams();

  let asideVideos = state.videos.filter((item) => item._id !== videoID);
  let spliceVideos = asideVideos.splice(0, 4);

  return (
    <div className="v-videolist-aside">
      {spliceVideos.map((video) => {
        return (
          <div className="v-card card-ecom">
            <img src={video.thumbnail_url} alt="card_image" />
            <div className="card-product-bottom">
              <div className="card-details">
                <div className="v-product-icon-wraper">
                  <p className="v-card-product-name">{video.title}</p>
                  <div>
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
                <p className="card-subtitle v-card-product-desc">
                  6K Views | 4 hours ago
                </p>
              </div>

              <Link to={`/video/${video._id}`}>
                <button className="card-foot-btn card-btn-ecom">
                  Watch this video
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
