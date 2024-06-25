import React from "react";
import { useState } from "react";
import "./GeneralForm.css";
import BasicInfo from "./BasicInfo";
import AccountDetail from "./AccountDetail";
import Transaction from "./Transaction";

export default function GeneralForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    companyName: "",
    TaxNumber: "",
    AccountN: "",
    AccountHolder: "",
    transactionId: "",
    TName: "",
    PaymentType: "",
    date: "",
    Amount: "",
  });
  const formtitle = [
    "Steo 1 : Basic Information",
    "Step 2 : Account Details",
    "Step 3 : Transaction Details",
  ];

  const PageDisplay = () => {
    if (page == 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else if (page == 1) {
      return <AccountDetail formData={formData} setFormData={setFormData} />;
    } else {
      return <Transaction formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="general-form-container">
      <div className="form-head">
        <p>
          {page == formtitle.length
            ? formtitle[formtitle.length - 1]
            : formtitle[page]}
        </p>
      </div>
      <div className="form-body">{PageDisplay()}</div>
      <div className="form-footer">
        <button
          disabled={page == 0}
          onClick={() => {
            if (page == formtitle.length - 1) {
              alert("save");
              console.log(formData);
            }
            {
              setPage((currPage) => currPage + 1);
            }
          }}
          style={page == 0 ? { display: "none" } : styles}
        >
          {page == 1 ? "Next" : "Save"}
        </button>
        <button
          onClick={() => {
            if (page == formtitle.length - 1) {
              alert("form submited");
              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
          style={styles}
        >
          {page == 0
            ? "Next"
            : page == 1
            ? "Add another"
            : formtitle.length - 1
            ? "Add another"
            : "Next"}
        </button>
      </div>
    </div>
  );
}

let styles = {
  fontSize: "19px",
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
