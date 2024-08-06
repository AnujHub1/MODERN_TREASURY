import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubsideImage from "../../../assets/subSideImage.png";
import "./Subside.css";

export default function SubImage({ subside, setSubside }) {
  return (
    <div
      className="centarImg"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        marginTop: "30px",
      }}
    >
      <img src={SubsideImage} alt="General ledger image" />
      <Link
        className="general-view-btn"
        to="/platforms/ledgers/subsidiary"
        onClick={() => {
          setSubside((currpage) => currpage + 1);
        }}
      >
        Views sccounts
      </Link>
      <Link
        to="/platforms/ledgers/subsidiary"
        className="general-view-btn"
        onClick={() => {
          setSubside((currpage) => currpage + 1);
        }}
      >
        Create Ledger
      </Link>
    </div>
  );
}
