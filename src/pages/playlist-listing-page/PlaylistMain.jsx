import axios from "axios";
import "./PlaylistMain.css";
import React from "react";
import { useEffect } from "react";
import { useVideo } from "../../context/video-context";
import { Link, useParams } from "react-router-dom";

export default function PlaylistMain() {
  const { state, dispatch } = useVideo();
  const { playlistID } = useParams();

  useEffect(() => {
    (async function showPlaylist() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/user/playlists", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200) {
          dispatch({
            type: "ADD_TO_PLAYLIST",
            payload: response.data.playlists,
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  async function deletePlayListsHandler(playListToDelete) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playListToDelete._id}`,
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

  return (
    <div className="v-playlist-wrapper">
      <div className="page-title">PlayLists</div>

      <div className="v-playlist-cards">
        {state.playlists.map((item) => {
          return (
            <div key={item._id}>
              <Link className="link-style" to={`/playlist/${item._id}`}>
                <div className="v-playlist-wrapper">
                  <div className="v-playlistname">{item.title}</div>
                  <div className="v-delete-btn">
                    <button
                      className="v-playlist-delete-btn"
                      onClick={() => deletePlayListsHandler(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
