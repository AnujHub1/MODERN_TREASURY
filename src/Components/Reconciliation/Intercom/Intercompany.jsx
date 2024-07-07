import React from "react";
import "../Multiway/MultiRecon.css";
import ledgerArrow from "../../../assets/arrow.png";
import leftSide from "../../../assets/leftside.png";
import rightSide from "../../../assets/rightSide.png";
import InterForm from "./InterForm";

export default function Intercompany() {
  return (
    <div className="cash-container GC">
      <a href="/platforms/Reconciliation" className="Ledgers-link">
        <img src={ledgerArrow} alt="multi-arrow" /> &nbsp;Intercompany
        Reconciliation
      </a>
      <div className="cash-sub">
        <div className="leftside">
          <img src={leftSide} alt="left side" />
        </div>
        <div className="centerSide">
          <InterForm />
        </div>
        <div className="rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
