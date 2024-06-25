import React from "react";
import "./LadgersHome.css";
import { Link } from "react-router-dom";
import genralImage from "../../assets/general.png";
import cashImage from "../../assets/cash.png";
import purchaseImage from "../../assets/purchase.png";
import salesImage from "../../assets/sales.png";
import subsidnaryImage from "../../assets/subsidnary.png";
import ledgerArrow from "../../assets/arrow.png";
import leftSide from "../../assets/leftside.png";
import rightSide from "../../assets/rightSide.png";

export default function LadgersHome() {
  return (
    <div>
      <div className="LadgerContainer">
        <a href="/home" className="Ledgers-link">
          <img src={ledgerArrow} alt="Payment-arrow" />
          Ledgers
        </a>
        <div className="ledgerContent">
          Track money, points, or any other store of value in an accurate,
          scalable database.
        </div>

        <div className="LadgerMain">
          <div className="subLedger">
            <img src={genralImage} alt="general" />
            <Link to="/platforms/ledgers/general">General</Link>
          </div>

          <div className="subLedger">
            <img src={subsidnaryImage} alt="SubSidary" />
            <Link to="/subsidiary">Subsidiary</Link>
          </div>

          <div className="subLedger" style={{ grid: 4 }}>
            <img src={cashImage} alt="Cash" />
            <Link to="/cash">Cash</Link>
          </div>

          <div className="subLedger sub1">
            <img src={salesImage} alt="Sales" />
            <Link to="/sales">Sales</Link>
          </div>
          <div className="subLedger sub1">
            <img src={purchaseImage} alt="purchase" />
            <Link to="/purchase">Purchase</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
