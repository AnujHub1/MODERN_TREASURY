import "./Navbar.css";
import vector from "../../assets/Vector.png";
import { Link } from "react-router-dom";

import React, { useState } from "react";
function Navbar() {
  let Items = [
    {
      title: "Platforms",
      cName: "Tags",
      dName: "drop-down",
      path: "#platforms",
      submenu: [
        {
          title: "Payments",
          path: "/payments",
        },
        {
          title: "Ladgers",
          path: "#ledgers",
        },
        {
          title: "Reconciliation",
          path: "#reconciliation",
        },
        {
          title: "Platform Overview",
          path: "#platformoverview",
        },
      ],
    },
    {
      title: "Resources",
      cName: "Tags",
      dName: "drop-down",
      path: "#resources",
      submenu: [
        {
          title: "Integrations",
          path: "#integrations",
        },
        {
          title: "Knowledge Hub",
          path: "#knowledgehuv",
        },
        {
          title: "Journal",
          path: "#journal",
        },
        {
          title: "Glossary",
          path: "#glossary",
        },
      ],
    },
    {
      title: "Documentation",
      cName: "Tags",
      dName: "drop-down",
      path: "#documentation",
      submenu: [
        {
          title: "API References",
          path: "#apireferences",
        },
      ],
    },
    {
      title: "Pricing",
      cName: "Tags",
      dName: "drop-down",
      path: "#pricing",
      submenu: [
        {
          title: "Pricing rates",
          path: "#pricingrates",
        },
      ],
    },
    {
      title: "Contact Us",
      cName: "Tags",
      dName: "drop-down",
      path: "/contactus",
      submenu: [
        {
          title: "talk to us",
          path: "/talktous",
        },
        {
          title: "submit a query",
          path: "/contact/submit",
        },
      ],
    },
  ];

  let [isActive, setIsActive] = useState(false);

  const handleClick = (index, event) => {
    // event.preventDefault();
    setIsActive((prevState) => ({
      [index]: !prevState[index],
    }));
  };
  return (
    <nav className="navbar">
      <div className="Navbar-brand">
        <img src={vector} alt="modern-logo" className="navbar-logo" />
        <span>MODERN TREASURY</span>
      </div>

      <div className="navbar-links">
        <ul>
          {Items.map((item, index) => (
            <li className={item.cName}>
              <Link
                to={item.path}
                key={index}
                onClick={(event) => handleClick(index, event)}
                className={isActive[index] ? "linkactive" : "nav-title"}
              >
                {item.title}
              </Link>
              {item.submenu && (
                <ul className={item.dName}>
                  {item.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={submenuItem.path}>{submenuItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
