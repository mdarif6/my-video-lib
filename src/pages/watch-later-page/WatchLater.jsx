import React from "react";
import Aside from "../../common/Aside";
import Header from "../../common/Header";
import HeaderWithOutSearch from "../../common/HeaderWithOutSearch";
import WatchMain from "./WatchMain";

export default function WatchLater() {
  return (
    <div className="v-video">
      <HeaderWithOutSearch />
      <Aside />
      <WatchMain />
    </div>
  );
}
