import React from "react";

import ClickArrow from "../../assets/cil_arrow-right.png";
import "./Payments_card.css";
import { Link } from "react-router-dom";

export default function payments_card({
  id,
  title,
  description,
  buttonText,
  imageUrl,
  path,
}) {
  return (
    <div className="payment-card">
      <div
        className="payment-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="paymnet-content">
        <h2>{title}</h2>
        <div>{description}</div>
        <div className="payment_Link">
          <Link key={id} to={path}>
            {buttonText}
          </Link>
          <img src={ClickArrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
