import React from "react";
import { Link } from "react-router-dom";
import CashLedgerImg from "../../../assets/cashledgerimg.png";

export default function CreateCashImage({ cashPage, setcasePage }) {
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
      <img src={CashLedgerImg} alt="Cash ledger image" />
      <Link
        to="/platforms/ledgers/cash"
        style={{
          backgroundColor: "#0a3f22",
          textDecoration: "none",
          color: "#ffffff",
          padding: "7px 30px",
          borderRadius: "4px",
          fontSize: "19px",
        }}
        onClick={() => {
          setcasePage((currPage) => currPage + 1);
        }}
      >
        Create Ledger
      </Link>
    </div>
  );
}
