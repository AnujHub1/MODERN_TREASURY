import React, { useState } from "react";
import "./Subside.css";

import ledgerArrow from "../../../assets/arrow.png";
import leftSide from "../../../assets/leftside.png";
import rightSide from "../../../assets/rightSide.png";
import SubSideForm from "./SubSideForm";
import SubImage from "./SubImage";

export default function Subside() {
  let [subside, setSubside] = useState(0);

  const pageDisplay = () => {
    if (subside == 0) {
      return <SubImage subside={subside} setSubside={setSubside} />;
    } else {
      return <SubSideForm />;
    }
  };

  return (
    <div className={`subSide-container ${subside === 1 ? "GC" : ""}`}>
      <a href="/platforms/ledgers" className="Ledgers-link">
        <img src={ledgerArrow} alt="Payment-arrow" /> &nbsp;Subsidiary Ledger
      </a>
      <div className="subSide-sub">
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
