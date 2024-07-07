import React from "react";
import "../Ledgers/LadgersHome.css";
import { Link } from "react-router-dom";
import ledgerArrow from "../../assets/arrow.png";
import multiway from "../../assets/multiway.png";
import batchPay from "../../assets/batchPay.png";
import intercompaty from "../../assets/intercompaty.png";
import threeWay from "../../assets/threeWay.png";

export default function ReconnciliationExplore() {
  return (
    <div>
      <div className="LadgerContainer">
        <h2
          style={{
            color: "#0a3f22",
            fontSize: "28px",
            fontWeight: "700",
            display: "flex",
            marginLeft: "240px",
            marginBottom: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          RECONCILIATION
        </h2>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "650",
            color: "#ffffff",
            marginBottom: "5px",
          }}
        >
          Select Use Case
        </h2>

        <div className="rec-main">
          <div className="subLedger">
            <img src={multiway} alt="Multi" />
            <Link to="/platforms/reconciliation/multiway">Multi-way</Link>
          </div>

          <div className="subLedger">
            <img src={intercompaty} alt="Intercompany" />
            <Link to="/platforms/reconciliation/intercompany">
              Intercompany
            </Link>
          </div>

          <div className="subLedger">
            <img src={batchPay} alt="Sales" />
            <Link to="/platforms/reconciliation/batch">Batch Payments</Link>
          </div>
          <div className="subLedger">
            <img src={threeWay} alt="purchase" />
            <Link to="/platforms/ledgers/purchase">Three-way</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
