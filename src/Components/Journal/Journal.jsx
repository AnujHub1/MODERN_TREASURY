import React from "react";
import { Link } from "react-router-dom";
import "./Journal.css";
import ledgerArrow from "../../assets/arrow.png";
import leftSide from "../../assets/leftside.png";
import rightSide from "../../assets/rightSide.png";
import journal1 from "../../assets/journal1.png";
import journal2 from "../../assets/journal2.png";
import journal3 from "../../assets/journal3.png";
export default function Journal() {
  return (
    <div className="Journal-container">
      <a href="/home" className="Journal-link">
        <img src={ledgerArrow} alt="glossary-arrow" className="genral-img" />
        &nbsp;Journal
      </a>
      <div className="Journal-sub">
        <div className="Journal-left">
          <img src={leftSide} alt="left side" />
        </div>
        <div className="Journal-center">
          <div className="journal-sub-center">
            <h3>About Us</h3>
            <p>
              Modern Treasury transforms how teams move and track money— to
              support impactful businesses rooted in trust and transparency.
            </p>
            <p>
              Dimitri Dadiomov, Matt Marcus, and Sam Aarons met at Kiavi,
              formerly LendingHome, where they were responsible for building and
              scaling Kiavi's payment operations platform. There, they
              recognized the massive need for modern, scalable payments
              infrastructure. This offering would serve thousands of companies
              whose dated payment systems limited their ability to support and
              connect with users, clients, and employees.
            </p>
            <h3>Our Goals</h3>
          </div>
          <div className="journal-sub2-center">
            <div className="footer-sub">
              <img src={journal1} alt="" />
              <p>Help our customers build their own best companies</p>
            </div>
            <div className="footer-sub">
              <img src={journal2} alt="" />
              <p>Create the conditions for personal and professional growth</p>
            </div>
            <div className="footer-sub">
              <img src={journal3} alt="" />
              <p>Make decisions for longevity</p>
            </div>
          </div>
        </div>

        <div className="Journal-right">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
