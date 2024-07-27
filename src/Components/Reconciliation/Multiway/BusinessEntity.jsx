import React from "react";
import "../../../css/Transaction.css";
import { useFormContext } from "react-hook-form";

export default function BusinessEntity({ formData, setFormdata }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="Transaction-container">
      <div className="transaction-subConatiner">
        <label htmlFor="registration">
          Registration ID<span>*</span>
        </label>
        <input
          {...register("registration", { required: "id is required" })}
          id="registration"
          type="text"
          name="registration"
          value={formData.registration}
          onChange={(event) => {
            setFormdata({ ...formData, registration: event.target.value });
          }}
        />
      </div>
      {errors.registration && (
        <p className="error-para">{errors.registration.message}</p>
      )}

      <div className="transaction-subConatiner">
        <label htmlFor="busi_Name">
          Name <span>*</span>
        </label>
        <input
          {...register("busi_Name", { required: "name is required" })}
          id="busi_Name"
          type="text"
          name="busi_Name"
          value={formData.busi_Name}
          onChange={(event) => {
            setFormdata({ ...formData, busi_Name: event.target.value });
          }}
        />
      </div>
      {errors.busi_Name && (
        <p className="error-para">{errors.busi_Name.message}</p>
      )}

      <div className="transaction-subConatiner">
        <label htmlFor="busi_contact">
          Contact Number <span>*</span>
        </label>
        <input
          {...register("busi_contact", { required: "contact is required" })}
          id="busi_contact"
          type="number"
          name="busi_contact"
          value={formData.busi_contact}
          onChange={(event) => {
            setFormdata({ ...formData, busi_contact: event.target.value });
          }}
        />
      </div>
      {errors.busi_contact && (
        <p className="error-para">{errors.busi_contact.message}</p>
      )}

      <div className="transaction-subConatiner">
        <label htmlFor="busi_email">
          Email <span>*</span>
        </label>
        <input
          {...register("busi_email", {
            required: { value: true, message: "email is required" },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Invalid email address",
            },
          })}
          id="busi_email"
          type="email"
          name="busi_email"
          value={formData.busi_email}
          onChange={(event) => {
            setFormdata({ ...formData, busi_email: event.target.value });
          }}
        />
      </div>
      {errors.busi_email && (
        <p className="error-para">{errors.busi_email.message}</p>
      )}
    </div>
  );
}
