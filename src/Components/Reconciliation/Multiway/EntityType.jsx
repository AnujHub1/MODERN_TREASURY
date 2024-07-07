import React from "react";
import { Link } from "react-router-dom";
import "./EntityType.css";

import indivisual from "../../../assets/indivisual.png";
import business from "../../../assets/business.png";

export default function EntityType({ page, setPage }) {
  return (
    <div className="Entity-type">
      <div className="type1">
        <img src={indivisual} alt="Multi" />
        <Link
          // to="/platforms/reconciliation/multiway"
          onClick={() => {
            setPage((currpage) => currpage + 1);
          }}
        >
          Individual
        </Link>
      </div>

      <div className="type1">
        <img src={business} alt="Intercompany" />
        <Link
          // to="/platforms/ledgers/multiway"
          onClick={() => {
            setPage((currpage) => currpage + 2);
          }}
        >
          Business
        </Link>
      </div>
    </div>
  );
}
