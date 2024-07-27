import React from "react";
import "./BasicInfo.css";
import { useFormContext } from "react-hook-form";

export default function BasicInfo({ formData, setFormData }) {
  const {
    register,

    formState: { errors },
  } = useFormContext();

  return (
    <div className="basic-conatiner">
      <div className="basic-subConatiner">
        <label htmlFor="firstname">
          First Name <span>*</span>
        </label>
        <input
          {...register("firstName", {
            required: { value: true, message: "first name is required!" },
          })}
          id="firstname"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={(event) => {
            setFormData({ ...formData, firstName: event.target.value });
          }}
        />
      </div>
      {errors.firstName && (
        <p className="error-para">{errors.firstName.message}</p>
      )}

      <div className="basic-subConatiner">
        <label htmlFor="lastName">
          Last Name <span>*</span>
        </label>
        <input
          {...register("lastName", {
            required: { value: true, message: "last name is required!" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "must not be contain special character",
            },
          })}
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(event) => {
            setFormData({ ...formData, lastName: event.target.value });
          }}
        />
      </div>
      {errors.lastName && (
        <p className="error-para">{errors.lastName.message}</p>
      )}

      <div className="basic-subConatiner">
        <label htmlFor="contactNumber">
          Contact Number <span>*</span>
        </label>
        <input
          {...register("contactNumber", {
            required: { value: true, message: "contact number is required!" },
          })}
          id="contactNumber"
          type="number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={(event) => {
            setFormData({ ...formData, contactNumber: event.target.value });
          }}
        />
      </div>
      {errors.contactNumber && (
        <p className="error-para">{errors.contactNumber.message}</p>
      )}
      <div className="basic-subConatiner">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: { value: true, message: "mail is required!" },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Invalid email address",
            },
          })}
          name="email"
          value={formData.email}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
        />
      </div>
      {errors.email && <p className="error-para">{errors.email.message}</p>}

      <div className="basic-subConatiner">
        <label htmlFor="companyName">
          Company Name <span>*</span>
        </label>
        <input
          {...register("companyName", {
            required: { value: true, message: "company name is required!" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "must not be contain special character",
            },
          })}
          id="companyName"
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={(event) => {
            setFormData({ ...formData, companyName: event.target.value });
          }}
        />
      </div>
      {errors.companyName && (
        <p className="error-para">{errors.companyName.message}</p>
      )}
    </div>
  );
}
