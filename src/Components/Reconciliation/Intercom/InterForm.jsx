import React, { useState } from "react";
import "./InterForm.css";
import EntityDrop from "./EntityDrop";
import Indivisual from "../BatchPayment/indivisual";
import BatchBusiness from "../BatchPayment/BatchBusiness";
import Invoice from "../BatchPayment/BatchInvoice";
import Saved from "../Multiway/Saved";

export default function InterForm() {
  const [page, setPage] = useState(0);

  const [formData, setFormdata] = useState({
    Entity1: "",
    Entity2: "",
    transactionId: "",
    TName: "",
    PaymentType: "",
    date: "",
    Amount: "",
    individual_ID: "",
    ind_Name: "",
    ind_contact: "",
    ind_email: "",
    registration: "",
    busi_Name: "",
    busi_contact: "",
    busi_email: "",
    invoiceNum: "",
    invoiceId: "",
    invose_Type: "",
    Tran_Date: "",
  });

  const formTitle = [
    "Step 1: Entity Type",
    "Step 2: Entity 1 Details: Individual",
    "Step 2: Entity 1 Details: Business",
    "Step 2: Entity 2 Details: Indivisual",
    "Step 2: Entity 2 Details: Business",
    "Step 4: Invoice Details",
  ];

  const pageDisplay = () => {
    if (page == 0) {
      return <EntityDrop cashData={formData} setCashData={setFormdata} />;
    } else if (page == 1) {
      return <Indivisual formData={formData} setFormdata={setFormdata} />;
    } else if (page == 2) {
      return <BatchBusiness formData={formData} setFormdata={setFormdata} />;
    } else if (page == 3) {
      return <Indivisual formData={formData} setFormdata={setFormdata} />;
    } else if (page == 4) {
      return <BatchBusiness formData={formData} setFormdata={setFormdata} />;
    } else if (page == 5) {
      return <Invoice formData={formData} setFormdata={setFormdata} />;
    } else if (page == 6) {
      return <Saved page={page} setPage={setPage} />;
    }
  };
  return (
    <div className="Head_Form">
      <div className="form-head Form_title">
        <p>{formTitle[page]}</p>
      </div>
      <div
        className={`${
          page == formTitle.length
            ? "multiway-form-container"
            : "inter_form_container"
        }`}
      >
        <div className="Batch-form-body">{pageDisplay()}</div>
        <div className="form-footer">
          <button
            style={page <= 5 ? { display: "none" } : styles}
            onClick={() => {
              if (page == formTitle.length - 1) {
                alert("saved");
                console.log(formData);
                // disabled;
              } else if (page == formTitle.length) {
                return setPage(0);
              }
            }}
          >
            {page == formTitle.length ? "Yes" : "next"}
          </button>
          <button
            style={styles}
            onClick={() => {
              if (page == formTitle.length - 1) {
                alert("saved");
                console.log(formData);
              }
              if (page == formTitle.length) {
                setPage(-1);
              }

              setPage((currpage) => currpage + 1);
            }}
          >
            {page == formTitle.length ? "Exit" : "next"}
          </button>
        </div>
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
  display: "flex",
  margin: "10px",
  justifyContent: "center",
  alignItems: "center",
};

let styles2 = {
  display: "none",
};
