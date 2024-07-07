import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import reconImage from "../../assets/reconciliation.png";

export default function ReconImage({ page, setPage }) {
  return (
    <div
      className="centarImg"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // gap: "10px",
      }}
    >
      <h2 style={{ color: "#0a3f22", fontSize: "28px", fontWeight: "700" }}>
        RECONCILIATION
      </h2>
      <h2 style={{ fontSize: "28px", fontWeight: "650" }}>
        Reconcile with Precision at Scale.
      </h2>
      <img src={reconImage} alt="reconciliation image" />
      <Link
        to="/platforms/reconciliation"
        style={{
          backgroundColor: "#0a3f22",
          textDecoration: "none",
          color: "#ffffff",
          padding: "7px 30px",
          borderRadius: "4px",
          fontSize: "19px",
          marginTop: "20px",
        }}
        onClick={() => {
          setPage((currpage) => currpage + 1);
        }}
      >
        Explore
      </Link>
    </div>
  );
}
