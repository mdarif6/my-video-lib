import card_img from "../../assets/images/card_image.jpg";
import React from "react";
import "./HomePage.css";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Aside from "../../common/Aside";
import Nav from "./Nav";
import Main from "./Main";

export default function HomePage() {
  return (
    <div className="v-video">
      <Header />
      <Aside />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
