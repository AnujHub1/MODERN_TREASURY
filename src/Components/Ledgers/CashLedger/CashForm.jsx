import React, { useState } from "react";
import "../../../css/Forms.css";
import Transaction from "./Transaction.jsx";
import CustomerInfo from "./CustomerInfo.jsx";
import { useFormContext, FormProvider, useForm } from "react-hook-form";

export default function CashForm() {
  const [page, setPage] = useState(0);
  const [cashData, setCashData] = useState({
    transactionId: "",
    TName: "",
    PaymentType: "",
    date: "",
    Amount: "",
    cutomerId: "",
    customerName: "",
    contactN: "",
    email: "",
  });

  const formTitle = [
    "Step 1: Transaction Details",
    "Step 2: Customer information",
  ];

  const methods = useForm();

  const onSubmit = (data) => {
    if (page === formTitle.length - 1) {
      alert("save");
      console.log(data);
      setPage(0);
    } else {
      setPage((currPage) => currPage + 1);
      setFormData({ ...formData, ...data });
    }
  };

  const PageDisplay = () => {
    if (page == 0) {
      return <Transaction cashData={cashData} setCashData={setCashData} />;
    } else if (page == 1) {
      return <CustomerInfo cashData={cashData} setCashData={setCashData} />;
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="cash-form-container"
      >
        <div className="form-head">
          <p>{formTitle[page]}</p>
        </div>
        <div className="form-body">{PageDisplay()}</div>
        <div className="form-footer">
          <button
            className="general-button"
            // onClick={() => {
            //   alert("saved");
            //   console.log(cashData);
            // }}
          >
            Save
          </button>
          <button className={page == 1 ? "display-button" : "general-button"}>
            Next
          </button>
        </div>
      </form>
    </FormProvider>
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
