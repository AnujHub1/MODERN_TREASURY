import React from "react";

import Ebook from "../../assets/Knowebooks.png";
import EBooks from "./EBooks";
import Knowevideos from "../../assets/Knowvideos.png";
import webinar from "../../assets/webinar.png";
import whitepaper from "../../assets/whitepaper.png";
import { useParams } from "react-router-dom";

export default function SubPages() {
  const pageData = [
    {
      title: "Videos",
      path: Knowevideos,
      subLinks: [
        "Mastering Personal Finance: Tips for Budgeting and Saving",
        "Understanding Credit Scores and How to Improve Yours",
        "Stock Market 101: A Beginner's Guide to Investing",
        "How to Create a Financial Plan for Your Future",
      ],
    },
    {
      title: "E-Books",
      path: Ebook,
      subLinks: [
        "Financial Freedom: A Comprehensive Guide to Building Wealth",
        "Investing for Beginners: Navigating the Stock Market",
        "The Complete Guide to Personal Finance Management",
        "Cryptocurrency for Everyone: Understanding Digital Assets",
      ],
    },

    {
      title: "Webinars",
      path: webinar,
      subLinks: [
        "Navigating Economic Uncertainty: Strategies for Financial Stability",
        "Investing in Real Estate: Opportunities and Challenges",
        "Understanding and Mitigating Financial Risks in Business",
        "Building a Diversified Investment Portfolio: Expert Insights and Tips",
      ],
    },
    {
      title: "Whitepapers",
      path: whitepaper,
      subLinks: [
        "Financial Freedom: A Comprehensive Guide to Building Wealth",
        "Investing for Beginners: Navigating the Stock Market",
        "The Complete Guide to Personal Finance Management",
        "Cryptocurrency for Everyone: Understanding Digital Assets",
      ],
    },
  ];
  const { title } = useParams();
  console.log(title);
  return (
    <>
      {pageData.map((item, index) => {
        return (
          item.title.toLowerCase() == title && (
            <EBooks
              key={index}
              title={item.title}
              path={item.path}
              kLink={item.subLinks}
            />
          )
        );
      })}
    </>
  );
}
