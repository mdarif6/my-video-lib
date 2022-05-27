import React from "react";
import Aside from "../../common/Aside";
import Header from "../../common/Header";
import LikedMain from "./LikedMain";

export default function LikeVideo() {
  return (
    <div className="v-video">
      <Header />
      <Aside />
      <LikedMain />
    </div>
  );
}
