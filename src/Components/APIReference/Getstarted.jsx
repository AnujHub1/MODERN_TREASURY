import React from "react";
import { Link } from "react-router-dom";
import ClickArrow from "../../assets/cil_arrow-right.png";
import "./ApiR";
export default function Getstarted({ page, setPage }) {
  return (
    <div className="centerSide">
      <div className="subcenter">
        <p className="getP">
          Modern Treasury APIs are the backbone of seamless financial
          operations, integrating payment workflows with precision and
          efficiency.
        </p>
        <p className="getP">
          Modern Treasury offers a straightforward RESTful API for initiating
          bank transfers, validating counterparty bank accounts, and monitoring
          account activity, among other functions. The API communicates over
          HTTP, with all requests and responses formatted as JSON objects.
        </p>
      </div>
      <div className="subcenter">
        <p className="getP">
          To get started, log-in to the web application and access your
          organization settings to see your API key.
        </p>
        <div
          className="api_link"
          onClick={() => setPage((Currpage) => Currpage + 1)}
        >
          <Link>Authentication</Link>
          <img src={ClickArrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
