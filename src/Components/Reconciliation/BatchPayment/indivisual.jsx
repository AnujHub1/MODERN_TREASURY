import React from "react";
import "../../../css/InterInput.css";
import { useFormContext } from "react-hook-form";

export default function indivisual({ formData, setFormdata }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="Batch-container">
      <div className="Batch-subConatiner">
        <label htmlFor="individual_ID">
          Individual ID<span>*</span>
        </label>
        <input
          {...register("individual_ID", { required: "id is required" })}
          id="individual_ID"
          type="text"
          name="individual_ID"
          value={formData.individual_ID}
          onChange={(event) => {
            setFormdata({ ...formData, individual_ID: event.target.value });
          }}
        />
        {errors.individual_ID && (
          <p className="error-para">{errors.individual_ID.message}</p>
        )}
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="ind_Name">
          Name <span>*</span>
        </label>
        <input
          {...register("ind_Name", { required: "name is required" })}
          id="ind_Name"
          type="text"
          name="ind_Name"
          value={formData.ind_Name}
          onChange={(event) => {
            setFormdata({ ...formData, ind_Name: event.target.value });
          }}
        />
        {errors.ind_Name && (
          <p className="error-para">{errors.ind_Name.message}</p>
        )}
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="ind_contact">
          Contact Number <span>*</span>
        </label>
        <input
          {...register("ind_contact", { required: "number is required" })}
          id="ind_contact"
          type="number"
          name="ind_contact"
          value={formData.ind_contact}
          onChange={(event) => {
            setFormdata({ ...formData, ind_contact: event.target.value });
          }}
        />
        {errors.ind_contact && (
          <p className="error-para">{errors.ind_contact.message}</p>
        )}
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="ind_email">
          Email <span>*</span>
        </label>
        <input
          {...register("ind_email", {
            required: { value: true, message: "email is required" },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Invalid email address",
            },
          })}
          value={formData.ind_email}
          onChange={(event) => {
            setFormdata({ ...formData, ind_email: event.target.value });
          }}
        />
        {errors.ind_email && (
          <p className="error-para">{errors.ind_email.message}</p>
        )}
      </div>
    </div>
  );
}
