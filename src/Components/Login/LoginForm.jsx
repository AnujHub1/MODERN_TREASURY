import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm({ formdata, setFormData }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className="Logincontainer">
      <form onSubmit={onSubmit} className="Login-form" action="/home">
        <p className="login-para">Login</p>
        <div className="input-Div">
          <label htmlFor="username">Username</label>
          <input
            {...register("username", {
              required: { value: true, message: "Username is required!" },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "must not be contain special character",
              },
            })}
            id="username"
            type="text"
            name="username"
            value={formdata.username}
            onChange={(event) => {
              setFormData({ ...formdata, username: event.target.value });
            }}
          />
        </div>
        {errors.username && (
          <p className="error-para">{errors.username.message}</p>
        )}

        <div className="input-Div">
          <label htmlFor="login_password">Password</label>
          <input
            {...register("login_password", {
              required: { value: true, message: "password is required!" },
              minLength: {
                value: 4,
                message: "password must be more than 4 characters",
              },
              maxLength: {
                value: 10,
                message: "password cannot exceed more than 10 characters",
              },
            })}
            id="login_password"
            type="password"
            name="login_password"
            value={formdata.login_password}
            onChange={(event) => {
              setFormData({ ...formdata, login_password: event.target.value });
            }}
          />
        </div>
        {errors.login_password && (
          <p className="error-para">{errors.login_password.message}</p>
        )}

        <button disabled={isSubmitting} type="submit" className="login-Btn">
          Login
        </button>

        <div className="signUp">
          Don't have an account?
          <Link to="/signup">
            <u>Sign Up</u>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
