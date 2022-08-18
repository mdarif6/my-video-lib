import React from "react";
import "./Modal.css";
import { useState } from "react";
import { useVideo } from "../../context/video-context";
import axios from "axios";
export default function Modal({ setShowModal, setShowMenu, item }) {
  const [createPlayList, setCreatePlayList] = useState(false);
  const [name, setName] = useState("");
  const { state, dispatch } = useVideo();

  async function createPlayListHandler() {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "/api/user/playlists",
        {
          playlist: { title: name },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 201) {
        dispatch({ type: "ADD_TO_PLAYLIST", payload: response.data.playlists });
        const foundPlayList = response.data.playlists.find(
          (item) => item.title === name
        );

        const responsePlayList = await axios.post(
          `/api/user/playlists/${foundPlayList._id}`,
          {
            video: item,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
    setName("");
  }

  async function existingPlaylistHandler(itemID) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `/api/user/playlists/${itemID}`,
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

  return (
    <div className="v-modal-wrapper">
      {/* <button onClick={() => setShowModal(true)}>click</button> */}

      <div className="v-playlist-create-wrapper">
        <div className="v-playlist-box-heading">
          <div>Save to...</div>
          <div>
            <i
              id="drop-down"
              className="fas fa-times"
              onClick={() => {
                setShowModal(false);
                setShowMenu(false);
              }}
            ></i>
          </div>
        </div>
        <div className="v-playlist-box-blank-div"></div>

        <div className="v-playlist-checkbox">
          {state.playlists.map((item) => {
            return (
              <div
                onClick={() => existingPlaylistHandler(item._id)}
                key={item._id}
              >
                <input className="select-input" type="checkbox" id="" />

                <label className="lable-name" htmlFor="">
                  {item.title}
                </label>
              </div>
            );
          })}
        </div>
        <div className="v-playlist-box-blank-div"></div>

        <div className="v-add-playlist">
          <i
            className="fas fa-plus"
            onClick={() => setCreatePlayList(!createPlayList)}
          ></i>
          <p>Create new playlist</p>
        </div>

        <div>
          <div className="v-playlist-box-inputs">
            <div className="v-playlist-name">
              <label>Name</label>
              <input
                type="text"
                value={name}
                placeholder="Enter Playlist Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              className="v-playlist-create-btn "
              onClick={() => createPlayListHandler()}
              disabled={name.length > 0 ? false : true}
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
