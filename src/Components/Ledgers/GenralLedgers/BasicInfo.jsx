import React from "react";
import "./BasicInfo.css";

export default function BasicInfo({ formData, setFormData }) {
  return (
    <div className="basic-conatiner">
      <div className="basic-subConatiner">
        <label htmlFor="firstName">
          First Name <span>*</span>
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={(event) => {
            setFormData({ ...formData, firstName: event.target.value });
          }}
        />
      </div>

      <div className="basic-subConatiner">
        <label htmlFor="lastName">
          Last Name <span>*</span>
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(event) => {
            setFormData({ ...formData, lastName: event.target.value });
          }}
        />
      </div>

      <div className="basic-subConatiner">
        <label htmlFor="contactNumber">
          Contact Number <span>*</span>
        </label>
        <input
          id="contactNumber"
          type="number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={(event) => {
            setFormData({ ...formData, contactNumber: event.target.value });
          }}
        />
      </div>

      <div className="basic-subConatiner">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
        />
      </div>

      <div className="basic-subConatiner">
        <label htmlFor="company">
          Company Name <span>*</span>
        </label>
        <input
          id="company"
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={(event) => {
            setFormData({ ...formData, companyName: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
