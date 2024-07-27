import React from "react";
import "./AccountDetail.css";
import { useFormContext } from "react-hook-form";
export default function AccountDetail({ formData, setFormData }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="Account-container">
      <div className="account-subConatiner">
        <label htmlFor="Tax">
          Tax Identification Number <span>*</span>
        </label>
        <input
          {...register("TaxNumber", { required: "tax number is required" })}
          id="Tax"
          type="text"
          name="TaxNumber"
          value={formData.TaxNumber}
          onChange={(event) => {
            setFormData({ ...formData, TaxNumber: event.target.value });
          }}
        />
      </div>
      {errors.TaxNumber && (
        <p className="error-para">{errors.TaxNumber.message}</p>
      )}

      <div className="account-subConatiner">
        <label htmlFor="AccountN">
          Account Number <span>*</span>
        </label>
        <input
          {...register("AccountN", { required: "account number is required" })}
          id="AccountN"
          type="number"
          name="AccountN"
          value={formData.AccountN}
          onChange={(event) => {
            setFormData({ ...formData, AccountN: event.target.value });
          }}
        />
      </div>
      {errors.AccountN && (
        <p className="error-para">{errors.AccountN.message}</p>
      )}

      <div className="account-subConatiner">
        <label htmlFor="AccountHolder">
          Account Holder Name <span>*</span>
        </label>
        <input
          {...register("AccountHolder", {
            required: "holder number is required",
          })}
          id="AccountHolder"
          type="text"
          name="AccountHolder"
          value={formData.AccountHolder}
          onChange={(event) => {
            setFormData({ ...formData, AccountHolder: event.target.value });
          }}
        />
      </div>
      {errors.AccountHolder && (
        <p className="error-para">{errors.AccountHolder.message}</p>
      )}
    </div>
  );
}
