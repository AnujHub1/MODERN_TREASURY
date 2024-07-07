import React from "react";
import "./Knowledgehub.css";
import ledgerArrow from "../../assets/arrow.png";
import leftSide from "../../assets/leftside.png";
import rightSide from "../../assets/rightSide.png";
import Know_Center from "./Know_Center";

export default function Knowledgehub() {
  return (
    <div className="knowledge-container">
      <a href="/home" className="knowledge-link">
        <img src={ledgerArrow} alt="knowledge-arrow" /> &nbsp;Knowledge Hub
      </a>
      <div className="knowledge-sub">
        <div className="knowledge_leftSide">
          <img src={leftSide} alt="left side" />
        </div>
        <Know_Center />
        <div className="knowledge_rightside">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
