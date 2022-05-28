import React from "react";
import { useVideo } from "../../context/video-context";
import { Link } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
import Modal from "../modal/Modal";

export default function VideoCard({ item }) {
  const { state, dispatch } = useVideo();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(true);
  }

  async function watchLaterHandler(item) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        {
          video: item,
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

  async function historyHandler(item) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "/api/user/history",
        {
          video: item,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 201) {
        dispatch({ type: "ADD_TO_HISTORY", payload: item });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="v-card card-ecom">
      <img src={item.thumbnail_url} alt="video_thumbnail" />
      <div className="card-product-bottom">
        <div className="card-details">
          <div className="v-product-icon-wraper">
            <p className="v-card-product-name">{item.title}</p>
            <div className="v-card-ellipsis">
              <i
                className="fas fa-ellipsis-v"
                onClick={() => setShowMenu(!showMenu)}
              ></i>
            </div>
          </div>
          {showMenu && (
            <div className="v-card-menu-wrapper">
              <div className="v-card-menu">
                <div className="v-card-icons-with-menu">
                  <div>
                    <i className="far fa-clock"></i>
                  </div>
                  <div
                    onClick={() => {
                      watchLaterHandler(item);
                      setShowMenu(false);
                    }}
                  >
                    Save to watch later
                  </div>
                </div>

                <div
                  className="v-card-icons-with-menu"
                  onClick={showModalHandler}
                >
                  <div>
                    <i className="fas fa-play"></i>
                  </div>
                  <div>Save to playlist</div>
                </div>

                {showModal && (
                  <Modal
                    setShowMenu={setShowMenu}
                    setShowModal={setShowModal}
                    item={item}
                  />
                )}

                <div className="v-card-icons-with-menu">
                  <div>
                    <i className="fas fa-share"></i>
                  </div>
                  <div>Share</div>
                </div>
              </div>
            </div>
          )}
          <p className="card-subtitle v-card-product-desc">
            {item.views} views | {item.createdTime} ago
          </p>
        </div>

        <Link to={`/video/${item._id}`}>
          <button
            className="card-foot-btn card-btn-ecom"
            onClick={() => historyHandler(item)}
          >
            Watch this video
          </button>
        </Link>
      </div>
    </div>
  );
}
