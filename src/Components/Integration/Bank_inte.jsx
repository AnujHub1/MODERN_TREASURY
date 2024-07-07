import React from "react";
import { Link } from "react-router-dom";
import goldman from "../../assets/goldman.png";
import HSBC from "../../assets/HSBC.png";
import tdBank from "../../assets/tdBank.png";
import usBank from "../../assets/USBANK.png";
import bankofAmerica from "../../assets/bank-of-america.png";
import Santander from "../../assets/santder.png";

export default function Bank_inte() {
  return (
    <div className="inte_centerSide">
      <h3>BANK INTEGRATIONS</h3>
      <p className="inte_getP">
        Direct bank connections for payments, reconciliation, and reporting.
      </p>
      <div className="bank-sub-inte">
        <div className="bank_link">
          <img src={bankofAmerica} alt="bank of america" />
          <Link>Bank of America</Link>
        </div>
        <div className="bank_link">
          <img src={Santander} alt="santder" />
          <Link>Santander</Link>
        </div>
        <div className="bank_link">
          <img src={goldman} alt="golman" />
          <Link>Goldman Sachs</Link>
        </div>
        <div className="bank_link">
          <img src={HSBC} alt="hsbc" />
          <Link>HSBC</Link>
        </div>
        <div className="bank_link">
          <img src={usBank} alt="us bank" />
          <Link>US Bank</Link>
        </div>
        <div className="bank_link">
          <img src={tdBank} alt="dc bank" />
          <Link>DC Bank</Link>
        </div>
      </div>
    </div>
  );
}
