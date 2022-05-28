import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useVideo } from "../../context/video-context";
import axios from "axios";

export default function WatchMain() {
  const { state, dispatch } = useVideo();

  useEffect(() => {
    (async function showWatchLater() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/user/watchlater", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: "ADD_TO_WATCHLATER",
            payload: response.data.watchlater,
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  async function deleteWatchHandler(deleteWatchVideos) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.delete(
        `/api/user/watchlater/${deleteWatchVideos._id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: "DELETE_FROM_WATCHLATER",
          payload: deleteWatchVideos._id,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="v-watchlater-wrapper">
      <div className="v-watchlater-heading">Watch Later</div>

      {state.watchlater.map((videos) => {
        return (
          <div className="v-history-videos" key={videos._id}>
            <div className="v-card card-ecom">
              <Link to={`/video/${videos._id}`}>
                <img src={videos.thumbnail_url} alt="video_thumbnail" />
              </Link>
            </div>
            <div className="v-card-side-content">
              <div className="card-product-bottom">
                <div className="card-details">
                  <div className="v-side-icon-wraper">
                    <p className="v-card-product-name">{videos.title}</p>
                    <div className="v-card-side-delete">
                      <i
                        className="fas fa-times"
                        onClick={() => deleteWatchHandler(videos)}
                      ></i>
                    </div>
                  </div>
                  <p className="card-subtitle v-card-product-desc">
                    {videos.views} views | {videos.createdTime} ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
