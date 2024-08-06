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
        gap: "5px",
      }}
    >
      <h2 className="rec-heading1">RECONCILIATION</h2>
      <h2 className="rec-heading2">Reconcile with Precision at Scale.</h2>
      <img src={reconImage} alt="reconciliation image" />
      <Link
        to="/platforms/reconciliation"
        className="general-view-btn"
        onClick={() => {
          setPage((currpage) => currpage + 1);
        }}
      >
        Explore
      </Link>
    </div>
  );
}
