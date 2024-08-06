import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Transaction from "../../Ledgers/CashLedger/Transaction";
import EntityType from "./EntityType";
import Indivisual from "./Indivisual";
import BusinessEntity from "./BusinessEntity";
import Invoice from "./Invoice";
import Saved from "./Saved";
import "../../../css/Forms.css";
export default function MultiwayForm() {
  const methods = useForm();
  const [page, setPage] = useState(0);
  const [formData, setFormdata] = useState({
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

  const pageDisplay = () => {
    if (page == 0) {
      return <Transaction cashData={formData} setCashData={setFormdata} />;
    } else if (page == 1) {
      return <EntityType page={page} setPage={setPage} />;
    } else if (page == 2) {
      return <Indivisual formData={formData} setFormdata={setFormdata} />;
    } else if (page == 3) {
      return <BusinessEntity formData={formData} setFormdata={setFormdata} />;
    } else if (page == 4) {
      return <Invoice formData={formData} setFormdata={setFormdata} />;
    } else {
      return <Saved page={page} setPage={setPage} />;
    }
  };

  const formTitle = [
    "Step 1: Transaction Details",
    "Step 2: Select Entity Type",
    "Step 3: Entity Details",
    "Step 3: Entity Details",
    "Step 4: Invoice Details",
  ];

  const onSubmit = (data) => {
    if (page === formTitle.length) {
      console.log(data);
      setPage(0);
    } else if (page == 2) {
      setPage((currPage) => currPage + 2);
    } else {
      setPage((currPage) => currPage + 1);
      setFormdata({ ...formData, ...data });
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`${page == 1 ? "FB" : "cash-form-container"}`}
      >
        <div className="form-head">
          <p>{formTitle[page]}</p>
        </div>
        <div className="form-body">{pageDisplay()}</div>
        <div className="form-footer">
          <button
            className={page <= 4 ? "display-button" : "general-button"}
            type="submit"
          >
            {page == formTitle.length ? "Yes" : "next"}
          </button>
          <button
            className={page == 1 ? "display-button" : "general-button"}
            type="submit"
          >
            {page == formTitle.length ? "Exit" : "next"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
