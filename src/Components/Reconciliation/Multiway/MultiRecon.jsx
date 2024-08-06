import React from "react";
import "../../../css/CashLedger.css";
import ledgerArrow from "../../../assets/arrow.png";
import leftSide from "../../../assets/leftside.png";
import rightSide from "../../../assets/rightSide.png";
import MultiwayForm from "./MultiwayForm.jsx";

export default function MultiRecon() {
  return (
    <div className="cash-container GC">
      <a href="/platforms/reconciliation" className="Ledgers-link">
        <img src={ledgerArrow} alt="multi-arrow" /> &nbsp;Multi-way
        Reconciliation
      </a>
      <div className="cash-sub">
        <div className="leftside">
          <img src={leftSide} alt="left side" className="leftimg" />
        </div>
        <MultiwayForm />
        <div className="rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
