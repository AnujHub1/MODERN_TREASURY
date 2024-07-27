import React from "react";
import { useFormContext } from "react-hook-form";
import "./Supplier.css";

export default function Supplier({ purchaData, setPurchaData }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="supplier-container">
      <div className="supplier-subConatiner">
        <label htmlFor="supplierId">
          Supplier ID <span>*</span>
        </label>
        <input
          id="supplierId"
          type="text"
          {...register("supplierId", { required: "Supplier ID is required" })}
          defaultValue={purchaData.supplierId}
          onChange={(event) => {
            setPurchaData({ ...purchaData, supplierId: event.target.value });
          }}
        />
        {errors.supplierId && (
          <p className="error-para">{errors.supplierId.message}</p>
        )}
      </div>

      <div className="supplier-subConatiner">
        <label htmlFor="supplierName">
          Name <span>*</span>
        </label>
        <input
          id="supplierName"
          type="text"
          {...register("supplierName", { required: "Name is required" })}
          defaultValue={purchaData.supplierName}
          onChange={(event) => {
            setPurchaData({ ...purchaData, supplierName: event.target.value });
          }}
        />
        {errors.supplierName && (
          <p className="error-para">{errors.supplierName.message}</p>
        )}
      </div>

      <div className="supplier-subConatiner">
        <label htmlFor="contactN">
          Contact Number <span>*</span>
        </label>
        <input
          id="contactN"
          type="number"
          {...register("contactN", { required: "Contact number is required" })}
          defaultValue={purchaData.contactN}
          onChange={(event) => {
            setPurchaData({ ...purchaData, contactN: event.target.value });
          }}
        />
        {errors.contactN && (
          <p className="error-para">{errors.contactN.message}</p>
        )}
      </div>

      <div className="supplier-subConatiner">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Invalid email address",
            },
          })}
          defaultValue={purchaData.email}
          onChange={(event) => {
            setPurchaData({ ...purchaData, email: event.target.value });
          }}
        />
        {errors.email && <p className="error-para">{errors.email.message}</p>}
      </div>
    </div>
  );
}
