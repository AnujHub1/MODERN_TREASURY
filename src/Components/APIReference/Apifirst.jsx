import React from "react";
import ClickArrow from "../../assets/cil_arrow-right.png";
import apiimage from "../../assets/apirefe.png";

import { Link } from "react-router-dom";
import "./ApiR";

export default function Apifirst({ page, setPage }) {
  return (
    <div className="Api_centerSide">
      <p className="apiP">
        Power seamless financial operations, integrating payment workflows with
        precision and efficiency.
      </p>
      <img src={apiimage} alt="API referecne" className="centerImage" />
      <div
        className="api_link"
        onClick={() => {
          setPage((currpage) => currpage + 1);
        }}
      >
        <Link>Get Started</Link>
        <img src={ClickArrow} alt="arrow" />
      </div>
    </div>
  );
}
