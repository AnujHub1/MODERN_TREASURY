import React, { useState } from "react";
import "./PurcheForm.css";
import PurDetail from "./PurDetail";
import Supplier from "./Supplier";

export default function PurcheForm() {
  const [page, setPage] = useState(0);
  const [purchaData, setPurchaData] = useState({
    invoice: "",
    PaymentType: "",
    date: "",
    Amount: "",
    supplierId: "",
    supplierName: "",
    contactN: "",
    email: "",
  });

  const formTitle = [
    "Step 1: Purchase Details",
    "Step 2: Supplier information",
  ];

  const PageDisplay = () => {
    if (page == 0) {
      return (
        <PurDetail purchaData={purchaData} setPurchaData={setPurchaData} />
      );
    } else if (page == 1) {
      return <Supplier purchaData={purchaData} setPurchaData={setPurchaData} />;
    }
  };
  return (
    <div className="purchase-form-container">
      <div className="form-head">
        <h4>{formTitle[page]}</h4>
      </div>
      <div className="form-body">{PageDisplay()}</div>
      <div className="form-footer">
        <button
          onClick={() => {
            if (page == formTitle.length - 1) {
              alert("save");
              console.log(purchaData);
              return <Supplier />;
            }
            setPage((currPage) => currPage + 1);
          }}
          style={styles}
        >
          {page == 0 ? "Next" : "Save"}
        </button>
      </div>
    </div>
  );
}
let styles = {
  fontSize: "19px",
  borderRadius: "10px",
  width: "130px",
  height: "45px",
  background: "#0a3f22",
  fontWeight: "520",
  color: "white",
  border: "0 none",
  cursor: "pointer",
  padding: "12px 10px",
  margin: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
