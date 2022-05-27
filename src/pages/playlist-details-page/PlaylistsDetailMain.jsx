import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useVideo } from "../../context/video-context";

export default function PlaylistsDetailMain() {
  const { playlistID } = useParams();
  const { state, dispatch } = useVideo();
  console.log(state.playlistDetail, "for playlist");

  useEffect(() => {
    (async function showPlaylistDetails() {
      let token = localStorage.getItem("authToken");
      const response = await axios.get(`/api/user/playlists/${playlistID}`, {
        headers: {
          authorization: token,
        },
      });
      console.log("Apiget", response.data.playlist.videos);
      if (response.status === 200) {
        dispatch({
          type: "ADD_TO_PLAYLIST_DETAIL",
          payload: response.data.playlist.videos,
        });
      }
      try {
      } catch (error) {
        console.log();
      }
    })();
  }, []);

  return (
    <div className="v-watchlater-wrapper">
      <div className="v-watchlater-heading">Specific PlayList</div>
      {state.playlistDetail.map((item) => {
        return (
          <div className="v-history-videos" key={item._id}>
            <div className="v-card card-ecom">
              {/* <Link to={`/video/${videos._id}`}> */}
              <img src={item.thumbnail_url} alt="video_thumbnail" />
              {/* </Link> */}
            </div>
            <div className="v-card-side-content">
              <div className="card-product-bottom">
                <div className="card-details">
                  <div className="v-side-icon-wraper">
                    <p className="v-card-product-name">{item.title}</p>
                    <div className="v-card-side-delete">
                      <i
                        class="fas fa-times"
                        // onClick={() =>
                        //   dispatch({
                        //     type: "DELETE_FROM_HISTORY",
                        //     payload: videos._id,
                        //   })
                        // }
                        // onClick={() => deleteWatchHandler(videos)}
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
