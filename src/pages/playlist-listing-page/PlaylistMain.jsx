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
        console.log(response);
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

  // async function playlistSendHandler(videoSendToPlayList) {
  //   let token = localStorage.getItem("authToken");
  //   try {
  //     const response = await axios.post(
  //       `/api/user/playlists/${playlistID}`,
  //       {
  //         video: videoSendToPlayList,
  //       },
  //       {
  //         headers: {
  //           authorization: token,
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    // <div>
    //   {state.playlists.map((item) => {
    //     return <div className="playlistname">{item.title}</div>;
    //   })}
    // </div>

    <div className="v-playlist-wrapper">
      <div className="v-watchlater-heading">PlayLists</div>

      {/* <Link to={`/video/${videos._id}`}>
            <img src={videos.thumbnail_url} alt="video_thumbnail" />
          </Link> */}
      <div className="v-playlist-cards">
        {state.playlists.map((item) => {
          return (
            <div>
              <Link className="link-style" to={`/playlist/${item._id}`}>
                <div
                  className="v-playlistname"
                  // onClick={() => playlistSendHandler(item)}
                >
                  {item.title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
