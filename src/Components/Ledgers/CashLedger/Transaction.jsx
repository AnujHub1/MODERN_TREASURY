import React from "react";
import "./Transaction.css";
import CashForm from "./CashForm";
import { useFormContext } from "react-hook-form";

export default function Transaction({ cashData, setCashData }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="Transaction-container">
      <div className="transaction-subConatiner">
        <label htmlFor="transaction">
          Transaction ID <span>*</span>
        </label>
        <input
          {...register("transactionId", {
            required: "id is required",
          })}
          id="transaction"
          type="text"
          name="transactionId"
          value={cashData.transactionId}
          onChange={(event) => {
            setCashData({ ...cashData, transactionId: event.target.value });
          }}
        />
      </div>
      {errors.transactionId && (
        <p className="error-para">{errors.transactionId.message}</p>
      )}

      <div className="transaction-subConatiner">
        <label htmlFor="Name">
          Name <span>*</span>
        </label>
        <input
          {...register("TName", { required: "name is required" })}
          id="Name"
          type="text"
          name="TName"
          value={cashData.TName}
          onChange={(event) => {
            setCashData({ ...cashData, TName: event.target.value });
          }}
        />
      </div>
      {errors.TName && <p className="error-para">{errors.TName.message}</p>}

      <div className="transaction-subConatiner">
        <label htmlFor="PaymentType">
          Payment Type <span>*</span>
        </label>
        <input
          {...register("PaymentType", { required: "type is required" })}
          id="PaymentType"
          type="number"
          name="PaymentType"
          value={cashData.PaymentType}
          onChange={(event) => {
            setCashData({ ...cashData, PaymentType: event.target.value });
          }}
        />
      </div>
      {errors.PaymentType && (
        <p className="error-para">{errors.PaymentType.message}</p>
      )}

      <div className="transaction-subConatiner">
        <label htmlFor="Date">
          Date <span>*</span>
        </label>
        <input
          {...register("date", { required: "date id is required" })}
          id="Date"
          type="Date"
          name="date"
          value={cashData.date}
          onChange={(event) => {
            setCashData({ ...cashData, date: event.target.value });
          }}
        />
      </div>
      {errors.date && <p className="error-para">{errors.date.message}</p>}

      <div className="transaction-subConatiner">
        <label htmlFor="Amount">
          Amount<span>*</span>
        </label>
        <input
          {...register("Amount", { required: "amount is required" })}
          id="Amount"
          type="number"
          name="Amount"
          value={cashData.Amount}
          onChange={(event) => {
            setCashData({ ...cashData, Amount: event.target.value });
          }}
        />
      </div>
      {errors.Amount && <p className="error-para">{errors.Amount.message}</p>}
    </div>
  );
}
