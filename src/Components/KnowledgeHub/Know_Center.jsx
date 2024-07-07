import React from "react";
import { Link } from "react-router-dom";
import Videos from "../../assets/Videos.png";
import Ebook from "../../assets/Ebooks.png";
import Webinar from "../../assets/webinars.png";
import whitepaper from "../../assets/whitepapers.png";
import "./Knowledgehub.css";

export default function Know_Center() {
  return (
    <div className="know-center">
      <p>
        Gain access to a diverse range of knowledge resources in formats
        suitable to you!.
      </p>
      <div>Available Resources</div>
      <div className="know-link-div">
        <img src={Videos} alt="knowvieos" />
        <Link className="know-link">Videos</Link>
      </div>
    </div>
  );
}
