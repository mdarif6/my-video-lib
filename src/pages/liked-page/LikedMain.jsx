import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useVideo } from "../../context/video-context";
import axios from "axios";

export default function LikedMain() {
  const { state, dispatch } = useVideo();

  useEffect(() => {
    (async function showLikedVideos() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/user/likes", {
          headers: {
            authorization: token,
          },
        });
        console.log("Api data like", response.data);
        if (response.status === 200 || response.status === 201) {
          dispatch({ type: "ADD_TO_LIKED", payload: response.data.likes });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="v-liked-videos-main">
      <div className="v-liked-heading">Liked Videos ({state.liked.length})</div>
      <div className="v-liked-wrapper">
        {state.liked &&
          state.liked.length > 0 &&
          state.liked.map((videos) => {
            return (
              <div className="v-card card-ecom">
                <img src={videos.thumbnail_url} alt="card_image" />
                <div className="card-product-bottom">
                  <div className="card-details">
                    <div className="v-product-icon-wraper">
                      <p className="v-card-product-name">{videos.title}</p>
                      <div>
                        <i className="fas fa-ellipsis-v"></i>
                      </div>
                    </div>
                    <p className="card-subtitle v-card-product-desc">
                      6K Views | 4 hours ago
                    </p>
                  </div>

                  <Link to={`/video/${videos._id}`}>
                    <button className="card-foot-btn card-btn-ecom">
                      Watch this video
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
