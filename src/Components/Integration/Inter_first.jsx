import React from "react";
import { Link } from "react-router-dom";
import Integratin_image from "../../assets/Integration.png";
export default function Inter_first({ page, setPage }) {
  return (
    <div className="inte_centerSide">
      <img src={Integratin_image} alt="integrating image" />
      <p className="inte_getP">
        Modern Treasury’s powerful integrations are the easiest way to keep your
        company’s data flowing.
      </p>
      <Link
        className="inte_link"
        onClick={() => {
          setPage((currpage) => currpage + 1);
        }}
      >
        Bank Integrations
      </Link>
      <Link
        className="inte_link"
        onClick={() => {
          setPage((currpage) => currpage + 2);
        }}
      >
        International Partners
      </Link>
    </div>
  );
}
