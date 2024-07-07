import React, { useState } from "react";
import "./Reconciliation.css";
import ledgerArrow from "../../assets/arrow.png";
import leftSide from "../../assets/leftside.png";
import rightSide from "../../assets/rightSide.png";
import ReconImage from "./ReconImage";
import ReconnciliationExplore from "./ReconnciliationExplore";

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
    <div className={`recon-container ${page === 1 ? "GC" : ""}`}>
      <a href="/platforms/reconciliation" className="recon-link">
        <img src={ledgerArrow} alt="Reconcialtion-arrow" /> &nbsp;Reconciliation
      </a>
      <div className="recon-sub">
        <div className="recon_leftside">
          <img src={leftSide} alt="left side" />
        </div>
        {pageDisplay()}
        <div className="recon_rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
