import React, { useState } from "react";
import "../../../css/CashLedger.css";
import ledgerArrow from "../../../assets/arrow.png";
import leftSide from "../../../assets/leftside.png";
import rightSide from "../../../assets/rightSide.png";
import SalesImage from "./SalesImage";
import SalesForm from "./SalesForm";

export default function SalesLedger() {
  const [salesPage, setSalesPage] = useState(0);

  const salesPageDisplay = () => {
    if (salesPage == 0) {
      return <SalesImage salesPage={salesPage} setSalesPage={setSalesPage} />;
    } else {
      return <SalesForm />;
    }
  };

  return (
    <div className={`cash-container ${salesPage === 1 ? "GC" : ""}`}>
      <a href="/platforms/ledgers" className="Ledgers-link">
        <img src={ledgerArrow} alt="Payment-arrow" /> &nbsp;Sales Ledger
      </a>
      <div className="cash-sub">
        <div className="leftside">
          <img src={leftSide} alt="left side" className="leftimg" />
        </div>
        {salesPageDisplay()}
        <div className="rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
