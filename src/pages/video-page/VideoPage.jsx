import React from "react";
import "./VideoPage.css";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Aside from "../../common/Aside";
import VideoMain from "./VideoMain";
import VideoListAside from "./VideoListAside";

export default function VideoPage() {
  return (
    <div className="v-video">
      <Header />
      <Aside />
      <VideoMain />
      <VideoListAside />
      <Footer />
    </div>
  );
}
