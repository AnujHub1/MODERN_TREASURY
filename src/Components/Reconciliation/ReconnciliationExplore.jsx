import React from "react";
import { Link } from "react-router-dom";
import multiway from "../../assets/multiway.png";
import batchPay from "../../assets/batchPay.png";
import intercompaty from "../../assets/intercompaty.png";
import threeWay from "../../assets/threeWay.png";
import "./ReconnciliationExplore.css";

export default function ReconnciliationExplore() {
  return (
    <div>
      <div className="recon_expolre_container">
        <h2 className="rec-explore-head1">RECONCILIATION</h2>
        <h2 className="rec-explore-head2">Select Use Case</h2>

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
