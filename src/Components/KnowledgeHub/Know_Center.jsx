import React from "react";
import { Link } from "react-router-dom";
import Videos from "../../assets/Videos.png";
import Ebook from "../../assets/Ebooks.png";
import Webinar from "../../assets/webinars.png";
import whitepaper from "../../assets/whitepapers.png";
import "./Knowledgehub.css";

export default function Know_Center({ page, setPage }) {
  return (
    <div className="know-center">
      <p>
        Gain access to a diverse range of knowledge resources in formats
        suitable to you!.
      </p>
      <div className="available-center">Available Resources</div>
      <div className="knowledge_image">
        <div
          className="know-link-div"
          onClick={() => {
            setPage((currpage) => currpage + 1);
          }}
        >
          <img src={Videos} alt="knowvieos" />
          <Link to="/resources/knowledgehub/videos" className="know-link">
            Videos
          </Link>
        </div>
        <div className="know-link-div">
          <img src={Ebook} alt="knowvieos" />
          <Link to="/resources/knowledgehub/e-books" className="know-link">
            E-Books
          </Link>
        </div>
        <div className="know-link-div">
          <img src={whitepaper} alt="knowvieos" />
          <Link to="/resources/knowledgehub/whitepapers" className="know-link">
            Whitepapers
          </Link>
        </div>
        <div className="know-link-div">
          <img src={Webinar} alt="knowvieos" />
          <Link to="/resources/knowledgehub/webinars" className="know-link">
            Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}
