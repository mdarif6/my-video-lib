import React from "react";
import { Link, useParams } from "react-router-dom";
import video_img from "../../assets/images/video_main.jpg";
import { useVideo } from "../../context/video-context";

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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            a asperiores ipsum, odio enim consequatur, aspernatur ducimus
            dolorum dolorem non ad rerum est quasi quisquam dolore esse odit
            vero atque! dolorem non ad rerum est quasi quisquam dolore esse odit
            vero atque!
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
