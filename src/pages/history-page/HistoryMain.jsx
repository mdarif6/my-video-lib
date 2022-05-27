import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import card_img from "../../assets/images/card_image.jpg";
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
        console.log("apidatahistory", response.data);
        if (response.status === 200 || response.status === 201) {
          dispatch({ type: "ADD_TO_HISTORY", payload: response.data.history });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  //  i have removed iife then it works properly

  async function deleteHandler(historyVideos) {
    let token = localStorage.getItem("authToken");
    console.log(historyVideos, "fffffffffff");
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
    console.log(historyAllVideos, "fffffffffff");
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: {
          authorization: token,
        },
      });

      console.log("aaaaaaaaaallllllllldeele", response);
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
      <div className="v-history-heading-and-btn">
        <div className="v-history-heading">
          Watch History ({state.history.length} videos)
        </div>
        <div>
          <button
            className="btn btn-error"
            // onClick={() =>
            //   dispatch({ type: "DELETE_FROM_HISTORY", payload: state.history })
            // }

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
            <div className="v-history-videos">
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
                          class="fas fa-times"
                          // onClick={() =>
                          //   dispatch({
                          //     type: "DELETE_FROM_HISTORY",
                          //     payload: videos._id,
                          //   })
                          // }

                          onClick={() => deleteHandler(videos)}
                        ></i>
                      </div>
                    </div>
                    <p className="card-subtitle v-card-product-desc">
                      6K Views | 4 hours ago
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
