import React from "react";
import { useForm } from "react-hook-form";
import logo2 from "../../assets/logo2.png";
import "./SignUp2.css";
import Bottam2 from "./Bottam2";
function SignUpForm({ formdata, setFormData }) {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formdata, ...data });
    console.log(formdata);
  };
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>

        <form>
          <div className="input-group">
            <label htmlFor="sign_password">Password</label>
            <input
              {...register("sign_password", {
                required: "password is required",
              })}
              type="password"
              id="password"
              name="sign_password"
              value={formdata.sign_password}
              onChange={(event) => {
                setFormData({ ...formdata, sign_password: event.target.value });
              }}
            />
          </div>
          {errors.sign_password && (
            <p className="error-para-singup2">{errors.sign_password.message}</p>
          )}

          <div className="input-group">
            <label htmlFor="con_password">Confirm Password</label>
            <input
              {...register("con_password", {
                required: "Password confirmation is required",
                validate: (value) =>
                  value === formdata.sign_password || "Passwords did not match",
              })}
              type="password"
              id="con_password"
              name="con_password"
              value={formdata.con_password}
              onChange={(event) => {
                setFormData({ ...formdata, con_password: event.target.value });
              }}
            />
          </div>
          {errors.con_password && (
            <p className="error-para-singup2">{errors.con_password.message}</p>
          )}

          <button
            type="submit"
            className="sign_btn"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitSuccessful}
          >
            Sign Up
          </button>
        </form>
        <div className="bottamForm2">
          <Bottam2></Bottam2>
        </div>
      </div>
      <div className="signUpImage">
        <img src={logo2} alt="SignUp image" />
      </div>
    </div>
  );
}

export default SignUpForm;
