import React from "react";
import { useForm } from "react-hook-form";
import logoImage from "../../assets/logo.png";
import Next from "../../assets/Next.png";
import "./SignUp.css";
import { useState } from "react";

function SignUp({ formdata, setFormData, page, setPage }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formdata, ...data });
    setPage((currpage) => currpage + 1);
  };

  return (
    <div className="SignUp-container">
      <div className="singUpForm">
        <h2>Sign Up</h2>
        <form className="formSign" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputDiv">
            <label htmlFor="Sign_Name">
              Name<span>*</span>
            </label>
            <input
              {...register("Sign_Name", { required: "Name is required" })}
              id="Sign_Name"
              type="text"
              name="Sign_Name"
              value={formdata.Sign_Name}
              onChange={(event) => {
                setFormData({ ...formdata, Sign_Name: event.target.value });
              }}
            />
          </div>
          {errors.Sign_Name && (
            <p className="error-para">{errors.Sign_Name.message}</p>
          )}

          <div className="inputDiv">
            <label htmlFor="contact_number">
              Contact Number<span>*</span>
            </label>
            <input
              {...register("contact_number", {
                required: "Contact Number is required",
              })}
              id="contact_number"
              type="number"
              name="contact_number"
              value={formdata.contact_number}
              onChange={(event) => {
                setFormData({
                  ...formdata,
                  contact_number: event.target.value,
                });
              }}
            />
          </div>
          {errors.contact_number && (
            <p className="error-para">{errors.contact_number.message}</p>
          )}

          <div className="inputDiv">
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              name="email"
              value={formdata.email}
              onChange={(event) => {
                setFormData({
                  ...formdata,
                  email: event.target.value,
                });
              }}
            />
          </div>
          {errors.email && <p className="error-para">{errors.email.message}</p>}

          <div className="inputDiv">
            <label htmlFor="company">
              Company Name<span>*</span>
            </label>
            <input
              {...register("company", {
                required: "Company name is required",
              })}
              id="company"
              type="text"
              name="company"
              value={formdata.company}
              onChange={(event) => {
                setFormData({
                  ...formdata,
                  company: event.target.value,
                });
              }}
            />
          </div>
          {errors.company && (
            <p className="error-para">{errors.company.message}</p>
          )}

          <div className="inputDiv">
            <label htmlFor="empNumber">
              No of Employees<span>*</span>
            </label>
            <input
              {...register("empNumber", {
                required: "no of employees required",
              })}
              id="empNumber"
              type="number"
              name="empNumber"
              value={formdata.empNumber}
              onChange={(event) => {
                setFormData({
                  ...formdata,
                  empNumber: event.target.value,
                });
              }}
            />
          </div>
          {errors.empNumber && (
            <p className="error-para">{errors.empNumber.message}</p>
          )}

          <button className="signup-Btn" onClick={handleSubmit(onSubmit)}>
            Next
            <img src={Next} alt="Next arrow" />
          </button>
        </form>
        <div className="bottam">Modern Treasury&copy;</div>;
      </div>

      <div className="signup-image">
        <img src={logoImage} alt="sign up front image" />
      </div>
    </div>
  );
}

export default SignUp;
