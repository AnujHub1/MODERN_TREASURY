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
        style={{
          backgroundColor: "#0a3f22",
          textDecoration: "none",
          color: "#ffffff",
          padding: "7px 35px",
          borderRadius: "8px",
          fontSize: "20px",
          marginTop: "60px",
        }}
        onClick={() => {
          setPurchasePage((currPage) => currPage + 1);
        }}
      >
        Create Ledger
      </Link>
    </div>
  );
}
