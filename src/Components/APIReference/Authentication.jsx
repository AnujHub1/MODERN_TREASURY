import React from "react";
import { Link } from "react-router-dom";
export default function Authentication() {
  return (
    <div className="Atho-center">
      <div className="ath-heading">
        <h2>Authentication</h2>
        <h3 style={{ textDecoration: "underline" }}>Method</h3>
      </div>
      <p className="api-getp">
        All requests must be made over HTTPS and will be authenticated over
        standard{" "}
        <Link style={{ color: "#0500FF" }}>HTTP basic authentication</Link>.
      </p>
      <h3
        className="ath-heading"
        style={{ textDecoration: "underline", fontWeight: "700" }}
      >
        Username & Password
      </h3>
      <p className="api-getp">
        When requested, enter the following values for username and password in
        the console/terminal:
      </p>
      <table className="ath-table">
        <tr>
          <th>Username</th>
          <th>Passowrd</th>
        </tr>
        <tr>
          <td>Ragistration ID</td>
          <td>API Key</td>
        </tr>
      </table>
      <div
        className="api-getp"
        style={{ marginTop: "25px", textAlign: "center", fontSize: "17px" }}
      >
        Need help?
        <Link style={{ color: "#0a3f22", fontWeight: "500" }}>
          Schedule a call now
        </Link>
      </div>
    </div>
  );
}
