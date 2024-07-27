import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import "./PurcheForm.css";
import PurDetail from "./PurDetail";
import Supplier from "./Supplier";

export default function PurcheForm() {
  const methods = useForm();
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
    "Step 2: Supplier Information",
  ];

  const onSubmit = (data) => {
    if (page === formTitle.length - 1) {
      alert("save");
      console.log(data);
    } else {
      setPage((currPage) => currPage + 1);
      setPurchaData({ ...purchaData, ...data });
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="purchase-form-container"
      >
        <div className="form-head">
          <h4>{formTitle[page]}</h4>
        </div>
        <div className="form-body">
          {page === 0 ? (
            <PurDetail purchaData={purchaData} setPurchaData={setPurchaData} />
          ) : (
            <Supplier purchaData={purchaData} setPurchaData={setPurchaData} />
          )}
        </div>
        <div className="form-footer">
          <button type="submit" style={styles}>
            {page === 0 ? "Next" : "Save"}
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
