import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubsideImage from "../../../assets/subSideImage.png";

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
        to="/platforms/ledgers/subsidiary"
        style={{
          backgroundColor: "#0a3f22",
          textDecoration: "none",
          color: "#ffffff",
          padding: "7px 27px",
          borderRadius: "4px",
          fontSize: "19px",
        }}
        onClick={() => {
          setSubside((currpage) => currpage + 1);
        }}
      >
        Views sccounts
      </Link>
      <Link
        to="/platforms/ledgers/subsidiary"
        style={{
          backgroundColor: "#0a3f22",
          textDecoration: "none",
          color: "#ffffff",
          padding: "7px 30px",
          borderRadius: "4px",
          fontSize: "19px",
        }}
        onClick={() => {
          setSubside((currpage) => currpage + 1);
        }}
      >
        Create Ledger
      </Link>
    </div>
  );
}
