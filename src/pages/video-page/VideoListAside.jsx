import React from "react";
import card_img from "../../assets/images/card_image.jpg";
export default function VideoListAside() {
  return (
    <div className="v-videolist-aside">
      <div className="v-card card-ecom">
        <img src={card_img} alt="card_image" />
        <div className="card-product-bottom">
          <div className="card-details">
            <div className="v-product-icon-wraper">
              <p className="v-card-product-name">Watch this video</p>
              <div>
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <p className="card-subtitle v-card-product-desc">
              6K Views | 4 hours ago
            </p>
          </div>

          <button className="card-foot-btn card-btn-ecom">
            Watch this video
          </button>
        </div>
      </div>
      <div className="v-card card-ecom">
        <img src={card_img} alt="card_image" />
        <div className="card-product-bottom">
          <div className="card-details">
            <div className="v-product-icon-wraper">
              <p className="v-card-product-name">Watch this video</p>
              <div>
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <p className="card-subtitle v-card-product-desc">
              6K Views | 4 hours ago
            </p>
          </div>

          <button className="card-foot-btn card-btn-ecom">
            Watch this video
          </button>
        </div>
      </div>
    </div>
  );
}
