import React from "react";
import "./Reconciliation.css";
import ledgerArrow from "../../assets/arrow.png";
import leftSide from "../../assets/leftside.png";
import rightSide from "../../assets/rightSide.png";
import ReconImage from "./ReconImage";

export default function Reconciliation() {
  return (
    <div className="recon-container">
      <a href="/home" className="recon-link">
        <img src={ledgerArrow} alt="Reconcialtion-arrow" /> &nbsp;Reconciliation
      </a>
      <div className="recon-sub">
        <div className="leftside">
          <img src={leftSide} alt="left side" />
        </div>
        <ReconImage />
        <div className="rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
