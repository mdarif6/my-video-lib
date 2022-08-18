import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import HeaderWithOutSearch from "../../common/HeaderWithOutSearch";
import SignMain from "./SignMain";

export default function SignupPage() {
  return (
    <div className="v-video">
      <HeaderWithOutSearch />
      <SignMain />
      <Footer />
    </div>
  );
}
