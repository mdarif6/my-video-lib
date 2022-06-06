import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import { useVideo } from "../../context/video-context";
import axios from "axios";

export default function VideoMain() {
  const { state, dispatch } = useVideo();
  const { videoID } = useParams();

  let asideVideos = state.videos.filter((item) => item._id !== videoID);
  let spliceVideos = asideVideos.splice(0, 4);

  let videoPlay = state.videos.find((video) => video._id === videoID);

  async function likeHandler(videoToSend) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "/api/user/likes",
        {
          video: videoToSend,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 201) {
        dispatch({ type: "ADD_TO_LIKED", payload: response.data.likes });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function disLikeHandler(videoToDislike) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.delete(
        `/api/user/likes/${videoToDislike._id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function watchLaterHandler(videoToWatchLater) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        {
          video: videoToWatchLater,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="v-video-main">
      <div className="v-playing-video-and-asidelist">
        <div className="v-video-wraper">
          <div>
            <div>
              <iframe
                width="100%"
                height="400px"
                src={`https://www.youtube.com/embed/${videoPlay.videoid}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
          <div className="v-video-bottom">
            <div className="v-bottom-title">{videoPlay.title}</div>
            <div className="v-bottom-date-and-menu">
              <div className="v-bottom-date">{videoPlay.createdAt}</div>
              <div className="v-bottom-menu">
                {state.liked.some((item) => item._id === videoPlay._id) ? (
                  <div
                    className="v-social-icon"
                    onClick={() => disLikeHandler(videoPlay)}
                  >
                    <i className="fas fa-thumbs-down"></i>
                    Like
                  </div>
                ) : (
                  <div
                    className="v-social-icon"
                    onClick={() => likeHandler(videoPlay)}
                  >
                    <i className="far fa-thumbs-up"></i>
                    Like
                  </div>
                )}

                <div
                  className="v-social-icon"
                  onClick={() => watchLaterHandler(videoPlay)}
                >
                  <i className="far fa-clock"></i>
                  Watch Later
                </div>
                <div className="v-social-icon">
                  <i className="far fa-bookmark"></i> Save
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* aside */}

        <div className="v-videolist-aside">
          {spliceVideos.map((video) => {
            return (
              <div className="v-card card-ecom" key={video._id}>
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
                      {video.views} views | {video.createdTime} ago
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
      </div>

      {/* aside */}
    </div>
  );
}
