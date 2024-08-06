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
        className="general-view-btn"
        onClick={() => {
          setcasePage((currPage) => currPage + 1);
        }}
      >
        Create Ledger
      </Link>
    </div>
  );
}
