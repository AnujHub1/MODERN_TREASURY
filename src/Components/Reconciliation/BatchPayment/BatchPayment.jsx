import React from "react";
import "../Multiway/MultiRecon.css";
import ledgerArrow from "../../../assets/arrow.png";
import leftSide from "../../../assets/leftside.png";
import rightSide from "../../../assets/rightSide.png";
import BatchForm from "./BatchForm";
import MultiwayForm from "../Multiway/MultiwayForm";
export default function BatchPayment() {
  return (
    <div className="cash-container GC">
      <a href="/platforms/ledgers" className="Ledgers-link">
        <img src={ledgerArrow} alt="multi-arrow" /> &nbsp;Batch Payment
      </a>
      <div className="cash-sub">
        <div className="leftside">
          <img src={leftSide} alt="left side" />
        </div>
        <BatchForm />
        <div className="rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
