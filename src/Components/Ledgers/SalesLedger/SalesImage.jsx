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
        style={{
          backgroundColor: "#0a3f22",
          textDecoration: "none",
          color: "#ffffff",
          padding: "7px 30px",
          borderRadius: "4px",
          fontSize: "19px",
          marginTop: "80px",
        }}
        onClick={() => {
          setSalesPage((currPage) => currPage + 1);
        }}
      >
        Create Ledger
      </Link>
    </div>
  );
}
