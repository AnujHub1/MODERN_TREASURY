import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ApiR.css";

import ledgerArrow from "../../assets/arrow.png";
import leftSide from "../../assets/leftside.png";
import rightSide from "../../assets/rightSide.png";
import Apifirst from "./Apifirst";
import Getstarted from "./Getstarted";
import Authentication from "./Authentication";
export default function ApiR() {
  let [page, setPage] = useState(0);
  const Pagedisplay = () => {
    if (page == 0) {
      return <Apifirst page={page} setPage={setPage} />;
    } else if (page == 1) {
      return <Getstarted page={page} setPage={setPage} />;
    } else {
      return <Authentication />;
    }
  };
  return (
    <div className="API-containe">
      <a href="/home" className="API-link">
        <img
          src={ledgerArrow}
          alt="Reconcialtion-arrow"
          className="api-image"
        />
        &nbsp;API References
      </a>
      <div className="API-sub">
        <div className={page == 0 ? "APIleftSide" : "OP"}>
          <img src={leftSide} alt="left side" />
        </div>
        {Pagedisplay()}
        <div className={page == 0 ? "APIrightside" : "OP1"}>
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
