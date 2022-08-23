import React from "react";
import Aside from "../../common/Aside";
import Footer from "../../common/Footer";
import HeaderWithOutSearch from "../../common/HeaderWithOutSearch";
import HistoryMain from "./HistoryMain";
export default function HistoryPage() {
  return (
    <div className="v-video">
      <HeaderWithOutSearch />
      <Aside />
      <HistoryMain />
      <Footer />
    </div>
  );
}
