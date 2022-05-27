import React from "react";
import { useState } from "react";

export default function CreatePlaylistMain() {
  const [createPlayList, setCreatePlayList] = useState(false);
  return (
    <div className="v-playlist-main">
      <div className="v-playlist-card-container">
        <div className="v-playlist-card">
          <p className="v-playlist-name"> PlayList One</p>
        </div>
        <div className="v-playlist-card">
          <p className="v-playlist-name"> PlayList One</p>
        </div>
      </div>
      <div className="v-playlist-create-wrapper">
        <div className="v-playlist-box-heading">
          <div>Save to...</div>
          <div>
            <i id="drop-down" className="fas fa-times"></i>
          </div>
        </div>
        <div className="v-playlist-box-blank-div"></div>

        <div className="v-playlist-checkbox">
          <div>
            <input className="select-input" type="checkbox" id="" />

            <label className="lable-name" for="">
              Watch Later
            </label>
          </div>
        </div>
        <div className="v-playlist-box-blank-div"></div>

        <div className="v-add-playlist">
          <i
            className="fas fa-plus"
            onClick={() => setCreatePlayList(!createPlayList)}
          ></i>
          <p>Create new playlist</p>
        </div>
        {createPlayList && (
          <div>
            <div className="v-playlist-box-inputs">
              <div className="v-playlist-name">
                <label>Name</label>
                <input type="text" placeholder="Enter Playlist Name" />
              </div>
            </div>
            <div>
              <button className="v-playlist-create-btn">CREATE</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
