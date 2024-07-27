import "./ContactForm.css";
import image from "../../assets/arrow.png";
import { useState } from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  let [formdata, setFormData] = useState({
    q_name: "",
    contact_number: "",
    q_email: "",
    msg: "",
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formdata, ...data });
    console.log(formdata);
  };

  return (
    <div className="contact-container">
      <a href="/contactus">
        <img src={image} alt="arrow image" />
        &nbsp;&nbsp; Submit a query
      </a>
      <form className="ContactForm2" onSubmit={handleSubmit(onSubmit)}>
        <div className="ContactinputDiv">
          <label htmlFor="q_name">
            Name<span>*</span>
          </label>
          <input
            {...register("q_name", {
              required: { value: true, message: "Name is required!" },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "must not be contain special character",
              },
            })}
            id="name"
            type="text"
            name="q_name"
            value={formdata.name}
            onChange={(event) =>
              setFormData({ ...formdata, q_name: event.target.value })
            }
          />
        </div>
        {errors.q_name && <p className="error-para">{errors.q_name.message}</p>}

        <div className="ContactinputDiv">
          <label htmlFor="contact_number">
            Contact Number<span>*</span>
          </label>
          <input
            {...register("contact_number", {
              required: { value: true, message: "Contact Number is required!" },
              minLength: {
                value: 10,
                message: "Contact Number cannot exceed more than 10",
              },
            })}
            id="contact_number"
            type="number"
            name="contact_number"
            value={formdata.contact_number}
            onChange={(event) =>
              setFormData({ ...formdata, contact_number: event.target.value })
            }
          />
        </div>
        {errors.contact_number && (
          <p className="error-para">{errors.contact_number.message}</p>
        )}

        <div className="ContactinputDiv">
          <label htmlFor="q_email">
            Email<span>*</span>
          </label>
          <input
            {...register("q_email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Invalid email address",
              },
            })}
            id="q_email"
            type="email"
            name="q_email"
            value={formdata.q_email}
            onChange={(event) =>
              setFormData({ ...formdata, q_email: event.target.value })
            }
          />
        </div>
        {errors.q_email && (
          <p className="error-para">{errors.q_email.message}</p>
        )}

        <div className="ContactinputDiv msgBox">
          <label htmlFor="msg">Message(Optional)</label>
          <input
            id="msg"
            type="text"
            name="msg"
            value={formdata.msg}
            onChange={(event) =>
              setFormData({ ...formdata, msg: event.target.value })
            }
          />
        </div>

        <div className="ContactinputDiv contact-btn">
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
