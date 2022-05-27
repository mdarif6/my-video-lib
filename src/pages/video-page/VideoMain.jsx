import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import video_img from "../../assets/images/video_main.jpg";
import { useVideo } from "../../context/video-context";
import axios from "axios";

export default function VideoMain() {
  const { state, dispatch } = useVideo();
  const { videoID } = useParams();
  console.log(videoID);
  console.log(state.videos);

  let asideVideos = state.videos.filter((item) => item._id !== videoID);
  let spliceVideos = asideVideos.splice(0, 4);
  console.log(asideVideos);

  let videoPlay = state.videos.find((video) => video._id === videoID);
  console.log(videoPlay);

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
        dispatch({ type: "ADD_TO_LIKED", payload: videoPlay });
      }
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

      if (response.status === 201) {
        dispatch({ type: "ADD_TO_WATCHLATER", payload: videoPlay });
      }
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
              <div className="v-bottom-date">date</div>
              <div className="v-bottom-menu">
                <div>
                  <i
                    class="far fa-thumbs-up"
                    onClick={() => likeHandler(videoPlay)}
                    // onClick={() =>
                    //   dispatch({ type: "ADD_TO_LIKED", payload: videoPlay })
                    // }
                  ></i>
                  Like
                </div>
                <div>
                  <i
                    class="far fa-clock"
                    onClick={() => watchLaterHandler(videoPlay)}
                  ></i>
                  Watch Later
                </div>
                <div>
                  <i class="far fa-bookmark"></i> Save
                </div>
              </div>
            </div>
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            a asperiores ipsum, odio enim consequatur, aspernatur ducimus
            dolorum dolorem non ad rerum est quasi quisquam dolore esse odit
            vero atque! dolorem non ad rerum est quasi quisquam dolore esse odit
            vero atque! */}
          </div>
        </div>
        {/* aside */}

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
      </div>

      {/* aside */}
    </div>
  );
}
