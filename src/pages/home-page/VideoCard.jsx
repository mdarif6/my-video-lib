import card_img from "../../assets/images/card_image.jpg";
import React from "react";

export default function VideoCard({ item }) {
  return (
    <div className="v-card card-ecom">
      <img src={item.thumbnail_url} alt="card_image" />
      {/* <div>
        <iframe
          width="100%"
          height="auto"
          src={`https://www.youtube.com/embed/${item.videoid}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div> */}

      <div className="card-product-bottom">
        <div className="card-details">
          <div className="v-product-icon-wraper">
            <p className="v-card-product-name">{item.title}</p>
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
  );
}
