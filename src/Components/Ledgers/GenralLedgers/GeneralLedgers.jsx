import React, { useState } from "react";
import "./GeneralLedgers.css";
import GeneralForm from "./GeneralForm";
import CreateLedgeImg from "./CreateLedgeImg";
import ledgerArrow from "../../../assets/arrow.png";
import leftSide from "../../../assets/leftside.png";
import rightSide from "../../../assets/rightSide.png";

export default function GeneralLedgers() {
  const [generalPage, setgeneralPage] = useState(0);

  let pageDisplay = () => {
    if (generalPage == 0) {
      return (
        <CreateLedgeImg
          generalPage={generalPage}
          setgeneralPage={setgeneralPage}
        />
      );
    } else {
      return <GeneralForm />;
    }
  };

  return (
    <div className={`general-container ${generalPage === 1 ? "GC" : ""}`}>
      <a href="/platforms/ledgers" className="Ledgers-link">
        <img src={ledgerArrow} alt="Payment-arrow" /> &nbsp;General Ledger
      </a>
      <div className="general-sub">
        <div className="leftside">
          <img src={leftSide} alt="left side" />
        </div>
        {pageDisplay()}
        <div className="rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
