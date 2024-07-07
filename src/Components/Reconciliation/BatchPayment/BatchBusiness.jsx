import React from "react";
import "./BatchDetail.css";
export default function BatchBusiness({ formData, setFormdata }) {
  return (
    <div className="Batch-container">
      <div className="Batch-subConatiner">
        <label htmlFor="registration">
          Registration ID<span>*</span>
        </label>
        <input
          id="registration"
          type="text"
          name="registration"
          value={formData.registration}
          onChange={(event) => {
            setFormdata({ ...formData, registration: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="busi_Name">
          Name <span>*</span>
        </label>
        <input
          id="busi_Name"
          type="text"
          name="busi_Name"
          value={formData.busi_Name}
          onChange={(event) => {
            setFormdata({ ...formData, busi_Name: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="busi_contact">
          Contact Number <span>*</span>
        </label>
        <input
          id="busi_contact"
          type="number"
          name="busi_contact"
          value={formData.busi_contact}
          onChange={(event) => {
            setFormdata({ ...formData, busi_contact: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="busi_email">
          Email <span>*</span>
        </label>
        <input
          id="busi_email"
          type="email"
          name="busi_email"
          value={formData.busi_email}
          onChange={(event) => {
            setFormdata({ ...formData, busi_email: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
