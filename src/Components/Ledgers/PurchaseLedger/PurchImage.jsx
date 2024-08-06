import React, { useState } from "react";
import { Link } from "react-router-dom";
import purchaseImg from "../../../assets/purchaseImg.png";

export default function PurchImage({ purchasePage, setPurchasePage }) {
  return (
    <div
      className="centarImg"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img src={purchaseImg} alt="Purchase ledger image" />
      <Link
        to="/platforms/ledgers/purchase"
        className="general-view-btn"
        onClick={() => {
          setPurchasePage((currPage) => currPage + 1);
        }}
      >
        Create Ledger
      </Link>
    </div>
  );
}
