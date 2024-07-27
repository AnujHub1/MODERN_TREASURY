import React from "react";
import { useFormContext } from "react-hook-form";
import "./PurDetail.css";

export default function PurDetail({ purchaData, setPurchaData }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="pur-container">
      <div className="pur-subConatiner">
        <label htmlFor="invoice">
          Invoice Number <span>*</span>
        </label>
        <input
          id="invoice"
          type="number"
          {...register("invoice", { required: "Invoice number is required" })}
          defaultValue={purchaData.invoice}
          onChange={(event) => {
            setPurchaData({ ...purchaData, invoice: event.target.value });
          }}
        />
        {errors.invoice && (
          <p className="error-para">{errors.invoice.message}</p>
        )}
      </div>

      <div className="pur-subConatiner">
        <label htmlFor="PaymentType">
          Payment Type <span>*</span>
        </label>
        <input
          id="PaymentType"
          type="text"
          {...register("PaymentType", { required: "Payment type is required" })}
          defaultValue={purchaData.PaymentType}
          onChange={(event) => {
            setPurchaData({ ...purchaData, PaymentType: event.target.value });
          }}
        />
        {errors.PaymentType && (
          <p className="error-para">{errors.PaymentType.message}</p>
        )}
      </div>

      <div className="pur-subConatiner">
        <label htmlFor="Date">
          Date <span>*</span>
        </label>
        <input
          id="Date"
          type="date"
          {...register("date", { required: "Date is required" })}
          defaultValue={purchaData.date}
          onChange={(event) => {
            setPurchaData({ ...purchaData, date: event.target.value });
          }}
        />
        {errors.date && <p className="error-para">{errors.date.message}</p>}
      </div>

      <div className="pur-subConatiner">
        <label htmlFor="Amount">
          Amount<span>*</span>
        </label>
        <input
          id="Amount"
          type="number"
          {...register("Amount", { required: "Amount is required" })}
          defaultValue={purchaData.Amount}
          onChange={(event) => {
            setPurchaData({ ...purchaData, Amount: event.target.value });
          }}
        />
        {errors.Amount && <p className="error-para">{errors.Amount.message}</p>}
      </div>
    </div>
  );
}
