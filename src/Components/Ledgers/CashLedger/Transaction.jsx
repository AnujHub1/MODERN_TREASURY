import React from "react";
import "./Transaction.css";
import CashForm from "./CashForm";

export default function Transaction({ cashData, setCashData }) {
  return (
    <div className="Transaction-container">
      <div className="transaction-subConatiner">
        <label htmlFor="transaction">
          Transaction ID <span>*</span>
        </label>
        <input
          id="transaction"
          type="text"
          name="transactionId"
          value={cashData.transactionId}
          onChange={(event) => {
            setCashData({ ...cashData, transactionId: event.target.value });
          }}
        />
      </div>

      <div className="transaction-subConatiner">
        <label htmlFor="Name">
          Name <span>*</span>
        </label>
        <input
          id="Name"
          type="text"
          name="TName"
          value={cashData.TName}
          onChange={(event) => {
            setCashData({ ...cashData, TName: event.target.value });
          }}
        />
      </div>

      <div className="transaction-subConatiner">
        <label htmlFor="PaymentType">
          Payment Type <span>*</span>
        </label>
        <input
          id="PaymentType"
          type="number"
          name="PaymentType"
          value={cashData.PaymentType}
          onChange={(event) => {
            setCashData({ ...cashData, PaymentType: event.target.value });
          }}
        />
      </div>

      <div className="transaction-subConatiner">
        <label htmlFor="Date">
          Date <span>*</span>
        </label>
        <input
          id="Date"
          type="Date"
          name="date"
          value={cashData.date}
          onChange={(event) => {
            setCashData({ ...cashData, date: event.target.value });
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
          value={cashData.Amount}
          onChange={(event) => {
            setCashData({ ...cashData, Amount: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
