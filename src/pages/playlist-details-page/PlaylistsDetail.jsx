import React from "react";
import Aside from "../../common/Aside";
import Header from "../../common/Header";
import PlaylistsDetailMain from "./PlaylistsDetailMain";

export default function Playlists() {
  return (
    <div className="v-video">
      <Header />
      <Aside />
      <PlaylistsDetailMain />
    </div>
  );
}
