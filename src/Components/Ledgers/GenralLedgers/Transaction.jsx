import React from "react";
import "./Transaction.css";
import { useFormContext } from "react-hook-form";

export default function Transaction({ formData, setFormData }) {
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
          {...register("transactionId", { required: "id number is required" })}
          id="transaction"
          type="text"
          name="transactionId"
          value={formData.transactionId}
          onChange={(event) => {
            setFormData({ ...formData, transactionId: event.target.value });
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
          {...register("TName", { required: "name number is required" })}
          id="Name"
          type="text"
          name="TName"
          value={formData.TName}
          onChange={(event) => {
            setFormData({ ...formData, TName: event.target.value });
          }}
        />
      </div>
      {errors.TName && <p className="error-para">{errors.TName.message}</p>}

      <div className="transaction-subConatiner">
        <label htmlFor="PaymentType">
          Payment Type <span>*</span>
        </label>
        <input
          {...register("PaymentType", {
            required: "payment type number is required",
          })}
          id="PaymentType"
          type="number"
          name="PaymentType"
          value={formData.PaymentType}
          onChange={(event) => {
            setFormData({ ...formData, PaymentType: event.target.value });
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
          {...register("date", { required: "date number is required" })}
          id="Date"
          type="Date"
          name="date"
          value={formData.date}
          onChange={(event) => {
            setFormData({ ...formData, date: event.target.value });
          }}
        />
      </div>
      {errors.date && <p className="error-para">{errors.date.message}</p>}

      <div className="transaction-subConatiner">
        <label htmlFor="Amount">
          Amount<span>*</span>
        </label>
        <input
          {...register("Amount", {
            required: "amount number is required",
          })}
          id="Amount"
          type="number"
          name="Amount"
          value={formData.Amount}
          onChange={(event) => {
            setFormData({ ...formData, Amount: event.target.value });
          }}
        />
      </div>
      {errors.Amount && <p className="error-para">{errors.Amount.message}</p>}
    </div>
  );
}
