import React, { useState } from "react";
import ledgerArrow from "../../assets/arrow.png";
import leftSide from "../../assets/leftside.png";
import rightSide from "../../assets/rightSide.png";
import ReconImage from "./ReconImage";
import ReconnciliationExplore from "./ReconnciliationExplore";
import "../../css/CashLedger.css";

export default function Reconciliation() {
  let [page, setPage] = useState(0);
  const pageDisplay = () => {
    if (page === 0) {
      return <ReconImage page={page} setPage={setPage} />;
    } else {
      return <ReconnciliationExplore />;
    }
  };
  return (
    <div className={`cash-container ${page === 1 ? "GC" : ""}`}>
      <a href="/platforms/reconciliation" className="Ledgers-link">
        <img src={ledgerArrow} alt="Reconcialtion-arrow" /> &nbsp;Reconciliation
      </a>
      <div className="cash-sub">
        <div className="leftside">
          <img src={leftSide} alt="left side" className="leftimg" />
        </div>
        {pageDisplay()}
        <div className="rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
