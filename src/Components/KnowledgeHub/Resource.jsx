import React, { useState } from "react";
import "./EBooks.css";
import Ebook from "../../assets/Knowebooks.png";
import EBooks from "./EBooks";
import Knowevideos from "../../assets/Knowvideos.png";
import webinar from "../../assets/webinar.png";
import whitepaper from "../../assets/whitepaper.png";
export default function Resource() {
  let ebooks = [
    {
      title: "Financial Freedom: A Comprehensive Guide to Building Wealth",
      path: Ebook,
    },
    {
      title: "Investing for Beginners: Navigating the Stock Market",
      path: Ebook,
    },
    {
      title: "The Complete Guide to Personal Finance Management",
      path: Ebook,
    },
    {
      title: "Cryptocurrency for Everyone: Understanding Digital Assets",
      path: Ebook,
    },
  ];

  const videoItems = [
    {
      title: "Mastering Personal Finance: Tips for Budgeting and Saving",
      path: Knowevideos,
    },
    {
      title: "Understanding Credit Scores and How to Improve Yours",
      path: Knowevideos,
    },
    {
      title: "Stock Market 101: A Beginner's Guide to Investing",
      path: Knowevideos,
    },
    {
      title: "How to Create a Financial Plan for Your Future",
      path: Knowevideos,
    },
  ];
  const webinarItems = [
    {
      title:
        "Navigating Economic Uncertainty: Strategies for Financial Stability",
      path: webinar,
    },
    {
      title: "Investing in Real Estate: Opportunities and Challenges",
      path: webinar,
    },
    {
      title: "Understanding and Mitigating Financial Risks in Business",
      path: webinar,
    },
    {
      title:
        "Building a Diversified Investment Portfolio: Expert Insights and Tips",
      path: webinar,
    },
  ];

  const whitepapers = [
    {
      title: "Financial Freedom: A Comprehensive Guide to Building Wealth",
      path: whitepaper,
    },
    {
      title: "Investing for Beginners: Navigating the Stock Market",
      path: whitepaper,
    },
    {
      title: "The Complete Guide to Personal Finance Management",
      path: whitepaper,
    },
    {
      title: "Cryptocurrency for Everyone: Understanding Digital Assets",
      path: whitepaper,
    },
  ];

  return (
    <>
      {/* <EBooks title="E-Books" items={ebooks} />
      {/* <EBooks title="Videos" items={videoItems} /> */}
      {/* <EBooks title="Webinars" items={webinarItems} /> */}
      {/* <EBooks title="Whitepapers" items={whitepapers} /> */}
    </>
  );
}
