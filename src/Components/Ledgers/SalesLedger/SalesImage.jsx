import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CreateSales from "../../../assets/CreateSales.png";

export default function SalesImage({ salesPage, setSalesPage }) {
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
      <img src={CreateSales} alt="Cash ledger image" />
      <Link
        to="/platforms/ledgers/sales"
        className="general-view-btn"
        onClick={() => {
          setSalesPage((currPage) => currPage + 1);
        }}
      >
        Create Ledger
      </Link>
    </div>
  );
}
