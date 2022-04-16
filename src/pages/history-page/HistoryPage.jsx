import React from "react";
import Aside from "../../common/Aside";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Nav from "../home-page/Nav";
import HistoryMain from "./HistoryMain";

export default function HistoryPage() {
  return (
    <div className="v-video">
      <Header />
      {/* <Nav /> */}
      <Aside />
      <HistoryMain />
      <Footer />
    </div>
  );
}
