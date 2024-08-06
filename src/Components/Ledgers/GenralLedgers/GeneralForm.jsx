import React from "react";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import "./GeneralForm.css";
import BasicInfo from "./BasicInfo";
import AccountDetail from "./AccountDetail";
import Transaction from "./Transaction";

export default function GeneralForm() {
  const methods = useForm();

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

  const onSubmit = (data) => {
    if (page === formtitle.length - 1) {
      alert("save");
      console.log(data);
    } else {
      setPage((currPage) => currPage + 1);
      setFormData({ ...formData, ...data });
    }
  };

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
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="general-form-container"
      >
        <div className="form-head genera_lform_head">
          <p className="form-paragraph">
            {page == formtitle.length
              ? formtitle[formtitle.length - 1]
              : formtitle[page]}
          </p>
        </div>
        <div className="form-body">{PageDisplay()}</div>
        <div className="form-footer">
          <button
            type="submit"
            disabled={page == 0}
            className={page == 0 ? "display-button" : "general-button"}
          >
            {page == 1 ? "Next" : "Save"}
          </button>
          <button type="submit" className="general-button">
            {page == 0
              ? "Next"
              : page == 1
              ? "Add another"
              : formtitle.length - 1
              ? "Add another"
              : "Next"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
