import React from "react";
import { Link } from "react-router-dom";
import swift from "../../assets/swift.png";
import "./Integration.css";
export default function International() {
  return (
    <div className="inte_centerSide international">
      <h3>INTERNATIONAL PAYMENT PARTNERS</h3>
      <p className="inte_getP">
        Utilize data from SWIFT for reconciliation and cross-border payment
        initiation.
      </p>
      <div className="bank_link">
        <img src={swift} alt="Swift" />
        <Link>Swift</Link>
      </div>
      <p className="inte_getP">
        Seamless, transaction-level reconciliation for these processors.
      </p>
    </div>
  );
}
