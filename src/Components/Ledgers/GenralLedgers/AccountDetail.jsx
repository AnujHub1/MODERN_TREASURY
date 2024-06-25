import React from "react";
import "./AccountDetail.css";
export default function AccountDetail({ formData, setFormData }) {
  return (
    <div className="Account-container">
      <div className="account-subConatiner">
        <label htmlFor="Tax">
          Tax Identification Number <span>*</span>
        </label>
        <input
          id="Tax"
          type="text"
          name="TaxNumber"
          value={formData.TaxNumber}
          onChange={(event) => {
            setFormData({ ...formData, TaxNumber: event.target.value });
          }}
        />
      </div>

      <div className="account-subConatiner">
        <label htmlFor="AccountN">
          Account Number <span>*</span>
        </label>
        <input
          id="AccountN"
          type="text"
          name="AccountN"
          value={formData.AccountN}
          onChange={(event) => {
            setFormData({ ...formData, AccountN: event.target.value });
          }}
        />
      </div>

      <div className="account-subConatiner">
        <label htmlFor="AccountHolder">
          Account Holder Name <span>*</span>
        </label>
        <input
          id="AccountHolder"
          type="text"
          name="AccountHolder"
          value={formData.AccountHolder}
          onChange={(event) => {
            setFormData({ ...formData, AccountHolder: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
