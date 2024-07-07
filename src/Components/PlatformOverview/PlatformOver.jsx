import React from "react";
import { Link } from "react-router-dom";
import "./PlatformOverview.css";
import ledgerArrow from "../../assets/arrow.png";
import Vector from "../../assets/Vector.png";

export default function PlatformOver() {
  return (
    <div className="Overview-container">
      <div className="overview1">
        <Link href="/home" className="Ledgers-link overviewLink">
          <img src={ledgerArrow} alt="platform-arrow" />
          Platform Overview
        </Link>
        <div className="sub-overview1">
          <img src={Vector} alt="vectore image" />
          <h2>One Platform. Three Products. Extensive Management.</h2>
          <p>
            Transform financial operations with integrated real-time data,
            driven by the RISE Engine.
          </p>
        </div>
      </div>
      <div className="overview2">
        <Link to="/platforms/payments" className="suboverview2">
          Payments
        </Link>
        <Link to="/platforms/ledgers" className="suboverview2">
          Ledgers
        </Link>
        <Link to="/platforms/reconciliation" className="suboverview2">
          Reconciliation
        </Link>
      </div>
    </div>
  );
}
