import React from "react";
import createLedger from "../../../assets/createLedge.png";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

export default function CreateLedgeImg({ generalPage, setgeneralPage }) {
  return (
    <div
      className="centarImg"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <img
        className="general_createLedger"
        src={createLedger}
        alt="General ledger image"
      />
      <Link
        to="/platforms/ledgers/general"
        style={{
          backgroundColor: "#0a3f22",
          textDecoration: "none",
          color: "#ffffff",
          padding: "7px 30px",
          borderRadius: "4px",
          fontSize: "16px",
        }}
        onClick={() => {
          setgeneralPage((currpage) => currpage + 1);
        }}
      >
        Create Ledger
      </Link>
    </div>
  );
}
