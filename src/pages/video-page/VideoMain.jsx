import React from "react";
import { useParams } from "react-router-dom";
import video_img from "../../assets/images/video_main.jpg";
import { useVideo } from "../../context/video-context";

export default function VideoMain() {
  const { state, dispatch } = useVideo();
  const { videoID } = useParams();
  console.log(videoID);
  console.log(state.videos);

  let videoPlay = state.videos.find((video) => video._id === videoID);
  console.log(videoPlay);
  return (
    <div className="v-video-main">
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate a
          asperiores ipsum, odio enim consequatur, aspernatur ducimus dolorum
          dolorem non ad rerum est quasi quisquam dolore esse odit vero atque!
          dolorem non ad rerum est quasi quisquam dolore esse odit vero atque!
        </div>
      </div>
    </div>
  );
}
