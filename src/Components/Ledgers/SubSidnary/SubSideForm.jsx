import React, { useState } from "react";
import "./SubSideForm.css";
import CustomerInfo from "../CashLedger/CustomerInfo";
import AccountDetail from "../GenralLedgers/AccountDetail";
import Transaction from "./Transaction";
import Vendor from "./Vendor";
import { useForm, FormProvider } from "react-hook-form";

export default function SubSideForm() {
  const methods = useForm();
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    cutomerId: "",
    customerName: "",
    contactN: "",
    email: "",
    vendorId: "",
    vendorName: "",
    Vcontact: "",
    Vemail: "",
    texinfo: "",
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
    "Steo 1 : Customer Details",
    "Step 2 : Vendor Details",
    "Step 3 : Account Details",
    "Step 4 : Transaction Details",
  ];

  const PageDisplay = () => {
    if (page == 0) {
      return <CustomerInfo cashData={formData} setCashData={setFormData} />;
    } else if (page == 1) {
      return <Vendor vendorData={formData} setvendorData={setFormData} />;
    } else if (page == 2) {
      return <AccountDetail formData={formData} setFormData={setFormData} />;
    } else {
      return <Transaction formData={formData} setFormData={setFormData} />;
    }
  };

  const onSubmit = (data) => {
    if (page === formtitle.length - 1) {
      alert("save");
      console.log(data);
    } else {
      setPage((currPage) => currPage + 1);
      setFormData({ ...formData, ...data });
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="subside-form-container"
      >
        <div className="form-head">
          <p>{formtitle[page]}</p>
        </div>
        <div className="form-body">{PageDisplay()}</div>
        <div className="form-footer">
          <button
            type="submit"
            className={page == 1 ? "display-button" : "general-button"}
            // onClick={() => {
            //   if (page == formtitle.length - 1) {
            //     alert("save");
            //     console.log(formData);
            //     return (
            //       <Transaction cashData={formData} setCashData={setFormData} />
            //     );
            //     disabled;
            //   }
            //   setPage((currPage) => currPage + 1);
            // }}
          >
            {page == 2 ? "next" : "save"}
          </button>
          <button
            // onClick={() => {
            //   if (page == formtitle.length - 1) {
            //     console.log(formData);
            //     return <Transaction />;
            //   }
            //   if (page == 2) {
            //     console.log(formData);
            //     return <AccountDetail />;
            //   }
            //   setPage((currPage) => currPage + 1);
            // }}
            className="general-button"
          >
            {page <= 1 ? "next" : "add another"}
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
