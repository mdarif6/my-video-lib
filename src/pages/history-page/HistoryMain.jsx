import React from "react";
import card_img from "../../assets/images/card_image.jpg";
export default function HistoryMain() {
  return (
    <div className="v-history-wrapper">
      <div className="v-history-heading-and-btn">
        <div className="v-history-heading">History</div>
        <div>
          <button className="btn btn-error">Clear History</button>
        </div>
      </div>
      <div className="v-history-videos">
        <div className="v-card card-ecom">
          <img src={card_img} alt="video_thumbnail" />
          <div className="card-product-bottom">
            <div className="card-details">
              <div className="v-product-icon-wraper">
                <p className="v-card-product-name">Title</p>
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
          <img src={card_img} alt="video_thumbnail" />
          <div className="card-product-bottom">
            <div className="card-details">
              <div className="v-product-icon-wraper">
                <p className="v-card-product-name">Title</p>
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
          <img src={card_img} alt="video_thumbnail" />
          <div className="card-product-bottom">
            <div className="card-details">
              <div className="v-product-icon-wraper">
                <p className="v-card-product-name">Title</p>
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
          <img src={card_img} alt="video_thumbnail" />
          <div className="card-product-bottom">
            <div className="card-details">
              <div className="v-product-icon-wraper">
                <p className="v-card-product-name">Title</p>
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
    </div>
  );
}
