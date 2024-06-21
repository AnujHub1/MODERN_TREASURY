import React from "react";
import "./Payments.css";
import payment_arrow from "../../assets/arrow.png";
import Payments_card from "./Payments_card";

//import parafin from "../../../public/navan.png";
// import navan from "../../assets/navan.png";
// import outdoorsy from "../../assets/outdoorsy.png";
// import c2fo from "../../assets/c2fo.png";

const cards = [
  {
    id: 1,
    title: "Parafin",
    description: "Gain access to growth capital with Modern Treasury.",
    buttonText: "Learn more",
    imageUrl: "../../../parafin.png",
    path: "/payments/parafin",
  },
  {
    id: 2,
    title: "Navan",
    description: "Re-imagine expense management with Modern Treasury.",
    buttonText: "Learn more",
    imageUrl: "../../../navan.png",
    path: "#navan",
  },
  {
    id: 3,
    title: "Outdoorsy",
    description: "Faster payout times and improved user experience.",
    buttonText: "Learn more",
    imageUrl: "../../../outdoorsy.png",
    path: "#outdoorsy",
  },
  {
    id: 4,
    title: "C2FO",
    description: "Unlock new revenue by entering the flow of funds.",
    buttonText: "Learn more",
    imageUrl: "../../../c2fo.png",
    path: "#c2fo",
  },
];

function Payments() {
  return (
    <>
      <div className="payment-container">
        <a href="/home">
          <img src={payment_arrow} alt="Payment-arrow" />
          Payments
        </a>
        <h4>Build Faster. Accelerate Revenue.</h4>
        <div className="payment-para">Our Products</div>
      </div>
      <div className="payment-cards">
        {cards.map((card, index) => {
          return (
            <Payments_card
              key={index}
              id={card.id}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              imageUrl={card.imageUrl}
              path={card.path}
            ></Payments_card>
          );
        })}
      </div>
    </>
  );
}

export default Payments;
