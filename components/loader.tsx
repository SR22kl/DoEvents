import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        {/* Animated Orbs */}
        <div className="orb-container">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        {/* Spinner Ring */}
        <div className="spinner-ring"></div>

        {/* Center Pulse */}
        <div className="pulse-center"></div>

        {/* Loading Text */}
        <div className="loading-text">
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
