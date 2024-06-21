import React from "react";
import { Link } from "react-router-dom";
import ClickArr from "../../assets/cil_arrow-right.png";
import "./Payment_prod.css";
export default function Payment_Prod({
  title,
  description,
  useCases,
  products,
  paymentMethods,
  location,
  imageUrl,
}) {
  return (
    <div className="Payment_product_container">
      <div className="Payment_Product_header">
        <h3>{title}</h3>
        <div className="Payment_Product_Link">
          <Link to="/Talktous">
            Talk to us <img src={ClickArr} alt="arrow" />
          </Link>
        </div>
      </div>
      <div
        className="Payment_product_content"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <p className="Payment_product-para">{description}</p>
        <div className="details">
          <div className="detail">
            <p style={{ textDecoration: "underline" }}>Use cases</p>
            <p>{useCases}</p>
          </div>
          <div className="detail">
            <p style={{ textDecoration: "underline" }}>Products Payments</p>
            <p>{products}</p>
          </div>

          <div className="detail">
            <p style={{ textDecoration: "underline" }}>Payment Methods ACH</p>
            <p>{paymentMethods}</p>
          </div>

          <div className="detail">
            <p style={{ textDecoration: "underline" }}> Location</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
