import React from "react";
import "./CustomerInfo.css";

export default function CustomerInfo({ cashData, setCashData }) {
  return (
    <div className="cus-container">
      <div className="cus-subConatiner">
        <label htmlFor="cutomerId">
          Customer ID <span>*</span>
        </label>
        <input
          id="cutomerId"
          type="text"
          name="cutomerId"
          value={cashData.cutomerId}
          onChange={(event) => {
            setCashData({ ...cashData, cutomerId: event.target.value });
          }}
        />
      </div>

      <div className="cus-subConatiner">
        <label htmlFor="customerName">
          Customer Name <span>*</span>
        </label>
        <input
          id="customerName"
          type="text"
          name="customerName"
          value={cashData.customerName}
          onChange={(event) => {
            setCashData({ ...cashData, customerName: event.target.value });
          }}
        />
      </div>

      <div className="cus-subConatiner">
        <label htmlFor="contactN">
          Contact Number <span>*</span>
        </label>
        <input
          id="contactN"
          type="number"
          name="contactN"
          value={cashData.contactN}
          onChange={(event) => {
            setCashData({ ...cashData, contactN: event.target.value });
          }}
        />
      </div>

      <div className="cus-subConatiner">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={cashData.email}
          onChange={(event) => {
            setCashData({ ...cashData, email: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
