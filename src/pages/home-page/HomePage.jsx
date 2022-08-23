import React from "react";
import "./HomePage.css";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Aside from "../../common/Aside";
import Main from "./Main";

export default function HomePage() {
  return (
    <div className="v-video">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}
