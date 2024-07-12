import "./Navbar.css";
import vector from "../../assets/Vector.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import React, { useState } from "react";
function Navbar() {
  let Items = [
    {
      title: "Platforms",
      cName: "Tags",
      dName: "drop-down",
      path: "/platforms",
      submenu: [
        {
          title: "Payments",
          path: "/platforms/payments",
        },
        {
          title: "Ledgers",
          path: "/platforms/ledgers",
        },
        {
          title: "Reconciliation",
          path: "/platforms/reconciliation",
        },
        {
          title: "Platform Overview",
          path: "/platforms/platformoverview",
        },
      ],
    },
    {
      title: "Resources",
      cName: "Tags",
      dName: "drop-down",
      path: "/resources",
      submenu: [
        {
          title: "Integrations",
          path: "/resources/integrations",
        },
        {
          title: "Knowledge Hub",
          path: "/resources/knowledgehub",
        },
        {
          title: "Journal",
          path: "/resources/journal",
        },
        {
          title: "Glossary",
          path: "/resources/glossary",
        },
      ],
    },
    {
      title: "Documentation",
      cName: "Tags",
      dName: "drop-down",
      path: "/documentation",
      submenu: [
        {
          title: "API References",
          path: "/documentation/apireferences",
        },
      ],
    },
    {
      title: "Pricing",
      cName: "Tags",
      dName: "drop-down",
      path: "/pricing",
      submenu: [
        {
          title: "Pricing rates",
          path: "/pricing/pricingrates",
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
          path: "/contactus/talktous",
        },
        {
          title: "submit a query",
          path: "/contactus/submit",
        },
      ],
    },
  ];

  let [isActivate, setIsActivate] = useState(false);

  const handleClick = (index, event) => {
    // event.preventDefault();
    setIsActivate((prevState) => ({
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
              <NavLink
                to={item.path}
                key={index}
                // onClick={(event) => handleClick(index, event)}
                // className={isActive[index] ? "linkactive" : "nav-title"}
                className={({ isActive }) =>
                  isActive ? "linkactive" : "nav-title"
                }
              >
                {item.title}
              </NavLink>
              {item.submenu && (
                <ul className={item.dName}>
                  {item.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink to={submenuItem.path}>
                        {submenuItem.title}
                      </NavLink>
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
