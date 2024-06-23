import React from "react";
import Payment_Prod from "./Payment_Prod";
import { useParams } from "react-router-dom";

const payProduct = [
  {
    title: "PARAFIN",
    description:
      "Parafin was started by Ralph Furman, Vineet Goel, and Sahill Poddar during the height of the pandemic when they realized that SMBs were struggling to get capital to hire staff, buy equipment, and scale their operations.",
    useCases: "Financial Services",
    products: "Payments",
    paymentMethods: "ACH, Same-day ACH",
    location: "United States",
    link: "/payments/parafin",
    imageUrl: "../../../parafinHome.png",
  },
  {
    title: "NAVAN",
    description:
      "Navan (fka TripActions) is an end-to-end travel and expense management platform serving more than 8,800 customers all over the world. They use Modern Treasury's payments product to programmatically initiate, track, and reconcile employee reimbursements across 6 bank payment methods using a single API. The Modern Treasury web application provides their operations team with real time visibility into payment flows. Plus, the reliability of the platform ensures Navan can scale payment volumes effortlessly.",
    useCases: "Travel, Expense Management",
    products: "Payments",
    paymentMethods: "ACH, Wire, EFT, SEPA,BACS, BECS",
    location: "Global",
    link: "/payments/navan",
    imageUrl: "../../../navanHome.png",
  },
  {
    title: "OUTDOORSY",
    description:
      "Outdoorsy chose Modern Treasury and Plaid to automate payouts to RV owners, a process that previously took too long and was fraught with user error. They use Plaid to link and authenticate owner bank accounts, drastically reducing failed payments resulting from invalid account information. With Modern Treasury, they can move money directly from their corporate bank accounts to RV owners, decreasing payout times from 3-5 business days to 24 hours.",
    useCases: "Marketplace",
    products: "Payments",
    paymentMethods: "ACH, Same-day ACH",
    location: "United States",
    link: "/payments/outdoorsy",
    imageUrl: "../../../outdoorsyHome.png",
  },
  {
    title: "C2FO",
    description:
      "C2FO is a first-of-its-kind, on-demand capital platform that dramatically improves B2B cash flow for businesses. Using an innovative, technology-driven model, C2FO makes standard loans (and their burdensome credit checks) unnecessary, unlocking faster business operations and increased flexibility. C2FO partnered with Modern Treasury to deliver a B2B card program that not only speeds up payments but also helps improve cash management, allowing them to orchestrate payments between several counterparties at scale.",
    useCases: "Dynamic Discounting",
    products: "Payments",
    paymentMethods: "ACH,Wire",
    location: "United States",
    link: "/payments/c2fo",
    imageUrl: "../../../c2foHome.png",
  },
];
export default function PaymentsProduct() {
  const { title } = useParams();
  console.log(title);
  return (
    <>
      {payProduct.map((product, index) => {
        return (
          product.title.toLowerCase() === title && (
            <Payment_Prod
              key={index}
              title={product.title}
              description={product.description}
              useCases={product.useCases}
              products={product.products}
              paymentMethods={product.paymentMethods}
              location={product.location}
              link={product.link}
              imageUrl={product.imageUrl}
            />
          )
        );
      })}
    </>
  );
}
