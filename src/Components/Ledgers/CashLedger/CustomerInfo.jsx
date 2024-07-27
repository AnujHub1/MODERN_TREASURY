import React from "react";
import "./CustomerInfo.css";
import { useFormContext } from "react-hook-form";

export default function CustomerInfo({ cashData, setCashData }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="cus-container">
      <div className="cus-subConatiner">
        <label htmlFor="cutomerId">
          Customer ID <span>*</span>
        </label>
        <input
          {...register("cutomerId", { required: "customer id is required" })}
          id="cutomerId"
          type="text"
          name="cutomerId"
          value={cashData.cutomerId}
          onChange={(event) => {
            setCashData({ ...cashData, cutomerId: event.target.value });
          }}
        />
      </div>
      {errors.cutomerId && (
        <p className="error-para">{errors.cutomerId.message}</p>
      )}

      <div className="cus-subConatiner">
        <label htmlFor="customerName">
          Customer Name <span>*</span>
        </label>
        <input
          {...register("customerName", { required: "name is required" })}
          id="customerName"
          type="text"
          name="customerName"
          value={cashData.customerName}
          onChange={(event) => {
            setCashData({ ...cashData, customerName: event.target.value });
          }}
        />
      </div>
      {errors.customerName && (
        <p className="error-para">{errors.customerName.message}</p>
      )}

      <div className="cus-subConatiner">
        <label htmlFor="contactN">
          Contact Number <span>*</span>
        </label>
        <input
          {...register("contactN", { required: "number is required" })}
          id="contactN"
          type="number"
          name="contactN"
          value={cashData.contactN}
          onChange={(event) => {
            setCashData({ ...cashData, contactN: event.target.value });
          }}
        />
      </div>
      {errors.contactN && (
        <p className="error-para">{errors.contactN.message}</p>
      )}

      <div className="cus-subConatiner">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          {...register("email", {
            required: { value: true, message: "email id is required" },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Invalid email address",
            },
          })}
          id="email"
          type="text"
          name="email"
          value={cashData.email}
          onChange={(event) => {
            setCashData({ ...cashData, email: event.target.value });
          }}
        />
      </div>
      {errors.email && <p className="error-para">{errors.email.message}</p>}
    </div>
  );
}
