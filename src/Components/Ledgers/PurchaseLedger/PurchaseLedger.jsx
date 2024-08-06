import React, { useState } from "react";
import "../../../css/CashLedger.css";
import ledgerArrow from "../../../assets/arrow.png";
import leftSide from "../../../assets/leftside.png";
import rightSide from "../../../assets/rightSide.png";
import PurcheForm from "./PurcheForm";
import PurcheImage from "./PurchImage";

export default function PurchaseLedger() {
  const [purchasePage, setPurchasePage] = useState(0);

  const purchaseDisplay = () => {
    if (purchasePage == 0) {
      return (
        <PurcheImage
          purchasePage={purchasePage}
          setPurchasePage={setPurchasePage}
        />
      );
    } else {
      return <PurcheForm />;
    }
  };
  return (
    <div className={`cash-container ${purchasePage === 1 ? "GC" : ""}`}>
      <a href="/platforms/ledgers" className="Ledgers-link">
        <img src={ledgerArrow} alt="Payment-arrow" /> &nbsp;Purchase Ledger
      </a>
      <div className="cash-sub">
        <div className="leftside">
          <img src={leftSide} alt="left side" className="leftimg" />
        </div>
        {purchaseDisplay()}
        <div className="rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
