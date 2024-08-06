import React from "react";
import "./PricingRates.css";
import { Link } from "react-router-dom";
import ledgerArrow from "../../assets/arrow.png";
import ClickArrow from "../../assets/cil_arrow-right.png";
import PricingImage from "../../assets/pricingbtn.png";
import rightArrow from "../../assets/rightArrow.png";

export default function PricingRates() {
  return (
    <div className="pricing-container">
      <div className="pricing1">
        <Link href="/home" className="Ledgers-link overviewLink">
          <img src={ledgerArrow} alt="pricing-arrow" />
          Pricing Rates
        </Link>
        <div className="subPricing">
          <h3 className="subprcing-heading">PRICING</h3>
          <p className="subpricing-para">
            Predictable Pricing, Designed for Scale.
          </p>
          <div className="api_link">
            <Link>Talk to us</Link>
            <img src={ClickArrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="pricing2">
        <div className="subPricing">
          <div className="subPrice">
            <img src={PricingImage} alt="Pricing right btn" />
            <p>
              Know what you’ll pay ahead of time with no consumption-based or
              per-transaction pricing
            </p>
          </div>
          <div className="subPrice">
            <img src={PricingImage} alt="Pricing right btn" />
            <p>
              Pricing plans based on the elements of our platform that you
              actually use
            </p>
          </div>
          <div className="subPrice">
            <img src={PricingImage} alt="Pricing right btn" />
            <p>
              Flexible tiers to support rapid company growth and product
              expansion
            </p>
          </div>
          <div className="pricing-explore">
            <Link>Explore Our Products</Link>
            <img
              src={rightArrow}
              alt="explore our product"
              style={{ color: "#0a3f22" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
