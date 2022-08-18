import React from "react";
import Aside from "../../common/Aside";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import HeaderWithOutSearch from "../../common/HeaderWithOutSearch";
import Nav from "../home-page/Nav";
import HistoryMain from "./HistoryMain";

export default function HistoryPage() {
  return (
    <div className="v-video">
      <HeaderWithOutSearch />
      {/* <Nav /> */}
      <Aside />
      <HistoryMain />
      <Footer />
    </div>
  );
}
