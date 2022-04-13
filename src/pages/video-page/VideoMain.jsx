import React from "react";
import video_img from "../../assets/images/video_main.jpg";
export default function VideoMain() {
  return (
    <div className="v-video-main">
      <div className="v-video-wraper">
        <div>
          <img src={video_img} alt="card_image" />
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
