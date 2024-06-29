import React from "react";

export default function Transaction({ formData, setFormData }) {
  return (
    <div className="Transaction-container">
      <div className="transaction-subConatiner">
        <label htmlFor="transaction">
          Transaction ID<span>*</span>
        </label>
        <input
          id="transaction"
          type="text"
          name="transactionId"
          value={formData.transactionId}
          onChange={(event) => {
            setFormData({ ...formData, transactionId: event.target.value });
          }}
        />
      </div>

      <div className="transaction-subConatiner">
        <label htmlFor="Name">
          Transaction Name<span>*</span>
        </label>
        <input
          id="Name"
          type="text"
          name="TName"
          value={formData.TName}
          onChange={(event) => {
            setFormData({ ...formData, TName: event.target.value });
          }}
        />
      </div>

      <div className="transaction-subConatiner">
        <label htmlFor="PaymentType">
          Description<span>*</span>
        </label>
        <input
          id="PaymentType"
          type="text"
          name="PaymentType"
          value={formData.PaymentType}
          onChange={(event) => {
            setFormData({ ...formData, PaymentType: event.target.value });
          }}
        />
      </div>

      <div className="transaction-subConatiner">
        <label htmlFor="Date">
          Date of Invoice<span>*</span>
        </label>
        <input
          id="Date"
          type="Date"
          name="date"
          value={formData.date}
          onChange={(event) => {
            setFormData({ ...formData, date: event.target.value });
          }}
        />
      </div>

      <div className="transaction-subConatiner">
        <label htmlFor="Amount">
          Amount<span>*</span>
        </label>
        <input
          id="Amount"
          type="number"
          name="Amount"
          value={formData.Amount}
          onChange={(event) => {
            setFormData({ ...formData, Amount: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
