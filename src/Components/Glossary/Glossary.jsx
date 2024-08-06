import React from "react";
import "./Glossary.css";
import { Link } from "react-router-dom";
import ledgerArrow from "../../assets/arrow.png";
import leftSide from "../../assets/leftside.png";
import rightSide from "../../assets/rightSide.png";

export default function Glossary() {
  return (
    <div className="Glossary-container">
      <a href="/home" className="Glossary-link">
        <img src={ledgerArrow} alt="glossary-arrow" className="glow-image" />
        &nbsp;Glossary
      </a>
      <div className="Glossary-sub">
        <div className="Glossary-left">
          <img src={leftSide} alt="left side" />
        </div>
        <div className="Glossary-center">
          <div className="GL-div">
            Learn about different common terms used in the finance industry, in
            a simple, straight-forward way.
          </div>
          <div className="paragraph-center">
            <p>
              What is <Link>ACH</Link>?
            </p>
            <p>
              ACH (Automated Clearing House) is a payment processing network
              that’s used to send money electronically between banks in the
              United States.
            </p>
            <p>
              How do <Link>ACH APIs</Link> work?
            </p>
            <p>
              ACH APIs enable companies with high transaction volumes to write
              software that automates payments over the ACH network. These APIs
              make it possible to initiate, receive and track payments at scale
              by eliminating manual processes.
            </p>
            <p>
              What is <Link>RTP</Link>?
            </p>
            <p>
              RTP (Real-Time Payments) is a payment processing network used to
              send money electronically between banks in the United States.
            </p>
            <p>
              What is <Link>Wire Transfer</Link>?
            </p>
            <p>
              A wire transfer is an electronic payment made through a global
              network, allowing for fast, irreversible, foreign or domestic
              electronic money transfers.
            </p>
          </div>
        </div>

        <div className="Glossary-right">
          <img src={rightSide} alt="right side" className="rightImage" />
        </div>
      </div>
    </div>
  );
}
