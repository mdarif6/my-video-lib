import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import "./LayoutComponent.css";
import Aside from "../../common/Aside";
import { useLocation } from "react-router-dom";

export default function LayoutComponent({ children }) {
  const location = useLocation();

  return (
    <div>
      <Header />
      <div className="aside-and-layout">
        {location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.key === "default" ? null : (
          <Aside />
        )}

        {children}
      </div>

      <Footer />
    </div>
  );
}
