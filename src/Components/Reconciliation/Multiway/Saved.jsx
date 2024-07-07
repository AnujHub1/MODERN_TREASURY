import React from "react";
import saved from "../../../assets/saved_success.png";

export default function Saved() {
  return (
    <div
      className="saved-conatiner"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={saved} alt="saved arrow" />
      <p style={{ fontSize: "18px" }}>Saved successfully!</p>
      <div
        style={{
          fontSize: "30px",
          fontWeight: "700",
          padding: "20px 50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Do you wish to add new transaction?
      </div>
    </div>
  );
}
