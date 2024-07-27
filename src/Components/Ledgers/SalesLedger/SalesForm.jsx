import React, { useState } from "react";
import CustomerInfo from "../CashLedger/CustomerInfo";
import Transaction from "../CashLedger/Transaction";
import "./SalesForm.css";
import { useForm, FormProvider } from "react-hook-form";

export default function SalesForm() {
  const methods = useForm();

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

  const formTitle = ["Step 1: Customer Details", "Step 2: Transaction Details"];

  const PageDisplay = () => {
    if (page == 0) {
      return <CustomerInfo cashData={cashData} setCashData={setCashData} />;
    } else if (page == 1) {
      return <Transaction cashData={cashData} setCashData={setCashData} />;
    }
  };

  const onSubmit = (data) => {
    if (page === formTitle.length - 1) {
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
        className="sales-form-container"
      >
        <div className="form-head">
          <p>{formTitle[page]}</p>
        </div>
        <div className="form-body">{PageDisplay()}</div>
        <div className="form-footer">
          <button
            type="submit"
            style={styles}
            // onClick={() => {
            //   alert("saved");
            //   console.log(cashData);
            // }}
          >
            Save
          </button>
          <button
            type="submit"
            // onClick={() => {
            //   if (page == formTitle.length - 1) {
            //     return (
            //       <CustomerInfo cashData={cashData} setCashData={setCashData} />
            //     );
            //   }
            //   setPage((currPage) => currPage + 1);
            // }}
            style={styles}
          >
            {page == 0 ? "Next" : "Add another"}
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
