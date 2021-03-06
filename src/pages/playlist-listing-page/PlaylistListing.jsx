import React from "react";
import Aside from "../../common/Aside";
import Header from "../../common/Header";
import PlaylistMain from "./PlaylistMain";

export default function PlaylistListing() {
  return (
    <div className="v-video">
      <Header />
      <Aside />
      <PlaylistMain />
    </div>
  );
}
