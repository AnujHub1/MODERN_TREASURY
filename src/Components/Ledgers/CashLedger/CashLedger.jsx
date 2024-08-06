import React, { useState } from "react";
import CreateCashImage from "./CreateCashImage";
import "../../../css/CashLedger.css";
import ledgerArrow from "../../../assets/arrow.png";
import leftSide from "../../../assets/leftside.png";
import rightSide from "../../../assets/rightSide.png";
import CashForm from "./CashForm";
export default function CashLedger() {
  const [cashPage, setcasePage] = useState(0);

  const cashPageDisplay = () => {
    if (cashPage == 0) {
      return <CreateCashImage cashPage={cashPage} setcasePage={setcasePage} />;
    } else {
      return <CashForm />;
    }
  };
  return (
    <div className={`cash-container ${cashPage === 1 ? "GC" : ""}`}>
      <a href="/platforms/ledgers" className="Ledgers-link">
        <img src={ledgerArrow} alt="Payment-arrow" /> &nbsp;Cash Ledger
      </a>
      <div className="cash-sub">
        <div className="leftside">
          <img src={leftSide} alt="left side" className="leftimg" />
        </div>
        {cashPageDisplay()}
        <div className="rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
