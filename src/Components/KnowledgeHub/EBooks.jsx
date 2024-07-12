import React from "react";
import { Link } from "react-router-dom";

import "./EBooks.css";
import ledgerArrow from "../../assets/arrow.png";
import leftSide from "../../assets/leftside.png";
import rightSide from "../../assets/rightSide.png";

export default function EBooks({ title, path, kLink }) {
  return (
    <div className="Ebooks-container">
      <a href="/resources/knowledgehub" className="Ebook-link">
        <img src={ledgerArrow} alt="knowledge-arrow" /> &nbsp;Knowledge Hub
      </a>

      <div className="Ebook-sub">
        <div className="Ebook_leftSide">
          <img src={leftSide} alt="left side" />
        </div>

        <div className="Ebooks-center">
          <h2>{title}</h2>
          {kLink.map((item) => {
            return (
              <div className="EbookLink">
                <img src={path} alt="" />
                <Link>{item}</Link>
              </div>
            );
          })}
        </div>

        <div className="Ebook_rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
