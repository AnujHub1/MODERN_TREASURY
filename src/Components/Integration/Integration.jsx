import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Integration.css";
import ledgerArrow from "../../assets/arrow.png";
import leftSide from "../../assets/leftside.png";
import rightSide from "../../assets/rightSide.png";
import Inter_first from "./Inter_first";
import Bank_inte from "./Bank_inte";
import International from "./International";

export default function Integration() {
  let [page, setPage] = useState(0);

  let pageDisplay = () => {
    if (page == 0) {
      return <Inter_first page={page} setPage={setPage} />;
    } else if (page == 1) {
      return <Bank_inte />;
    } else {
      return <International />;
    }
  };
  return (
    <div className="integration-containe">
      <a href="/home" className="integration-link">
        <img src={ledgerArrow} alt="integration-arrow" />
        &nbsp;Integrations
      </a>
      <div className="integration-sub">
        <div className="inte_leftSide">
          <img src={leftSide} alt="left side" className="left-image" />
        </div>
        {pageDisplay()}
        <div className="inte_rightside">
          <img src={rightSide} alt="right side" className="right-image" />
        </div>
      </div>
    </div>
  );
}
