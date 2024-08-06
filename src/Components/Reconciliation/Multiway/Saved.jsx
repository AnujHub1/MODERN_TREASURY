import React from "react";
import "../../../css/Forms.css";
import saved from "../../../assets/saved_success.png";

export default function Saved() {
  return (
    <div className="saved-conatiner">
      <img src={saved} alt="saved arrow" />
      <p>Saved successfully!</p>
      <div className="saved-paragraph">Do you wish to add new transaction?</div>
    </div>
  );
}
