import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useVideo } from "../../context/video-context";
import axios from "axios";
export default function HistoryMain() {
  const { state, dispatch } = useVideo();

  useEffect(() => {
    (async function showHistoryVideos() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/user/history", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200 || response.status === 201) {
          dispatch({ type: "ADD_TO_HISTORY", payload: response.data.history });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  async function deleteHandler(historyVideos) {
    let token = localStorage.getItem("authToken");

    try {
      const response = await axios.delete(
        `/api/user/history/${historyVideos._id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: "DELETE_FROM_HISTORY",
          payload: historyVideos._id,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteAllHandler(historyAllVideos) {
    let token = localStorage.getItem("authToken");

    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        dispatch({
          type: "CLEAR_HISTORY",
          payload: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="v-history-wrapper">
      <div className="page-title">Watch History</div>
      <div className="v-history-heading-and-btn">
        <div className="v-history-heading">
          Watch History ({state.history.length} videos)
        </div>
        <div>
          <button
            className="btn btn-error"
            onClick={() => deleteAllHandler(state.history)}
          >
            Clear History
          </button>
        </div>
      </div>

      {state.history &&
        state.history.length > 0 &&
        state.history.map((videos) => {
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
                          onClick={() => deleteHandler(videos)}
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
