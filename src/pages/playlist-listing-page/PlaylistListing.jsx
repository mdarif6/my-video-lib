import React from "react";
import Aside from "../../common/Aside";
import Header from "../../common/Header";
import HeaderWithOutSearch from "../../common/HeaderWithOutSearch";
import PlaylistMain from "./PlaylistMain";

export default function PlaylistListing() {
  return (
    <div className="v-video">
      {/* <HeaderWithOutSearch /> */}
      {/* <Aside /> */}
      <PlaylistMain />
    </div>
  );
}
