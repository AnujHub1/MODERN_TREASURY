import React from "react";
import "./BatchDetail.css";

export default function indivisual({ formData, setFormdata }) {
  return (
    <div className="Batch-container">
      <div className="Batch-subConatiner">
        <label htmlFor="individual_ID">
          Individual ID<span>*</span>
        </label>
        <input
          id="individual_ID"
          type="text"
          name="individual_ID"
          value={formData.individual_ID}
          onChange={(event) => {
            setFormdata({ ...formData, individual_ID: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="ind_Name">
          Name <span>*</span>
        </label>
        <input
          id="ind_Name"
          type="text"
          name="ind_Name"
          value={formData.ind_Name}
          onChange={(event) => {
            setFormdata({ ...formData, ind_Name: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="ind_contact">
          Contact Number <span>*</span>
        </label>
        <input
          id="ind_contact"
          type="number"
          name="ind_contact"
          value={formData.ind_contact}
          onChange={(event) => {
            setFormdata({ ...formData, ind_contact: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="ind_email">
          Email <span>*</span>
        </label>
        <input
          id="ind_email"
          type="email"
          name="ind_email"
          value={formData.ind_email}
          onChange={(event) => {
            setFormdata({ ...formData, ind_email: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
