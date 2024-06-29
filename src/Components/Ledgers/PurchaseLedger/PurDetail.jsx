import React, { useState } from "react";
import "./PurDetail.css";

export default function PurDetail({ purchaData, setPurchaData }) {
  return (
    <div className="pur-container">
      <div className="pur-subConatiner">
        <label htmlFor="invoice">
          Invoice Number <span>*</span>
        </label>
        <input
          id="invoice"
          type="number"
          name="invoice"
          value={purchaData.invoice}
          onChange={(event) => {
            setPurchaData({ ...purchaData, invoice: event.target.value });
          }}
        />
      </div>

      <div className="pur-subConatiner">
        <label htmlFor="PaymentType">
          Payment Type <span>*</span>
        </label>
        <input
          id="PaymentType"
          type="number"
          name="PaymentType"
          value={purchaData.PaymentType}
          onChange={(event) => {
            setPurchaData({ ...purchaData, PaymentType: event.target.value });
          }}
        />
      </div>

      <div className="pur-subConatiner">
        <label htmlFor="Date">
          Date <span>*</span>
        </label>
        <input
          id="Date"
          type="Date"
          name="date"
          value={purchaData.date}
          onChange={(event) => {
            setPurchaData({ ...purchaData, date: event.target.value });
          }}
        />
      </div>

      <div className="pur-subConatiner">
        <label htmlFor="Amount">
          Amount<span>*</span>
        </label>
        <input
          id="Amount"
          type="number"
          name="Amount"
          value={purchaData.Amount}
          onChange={(event) => {
            setPurchaData({ ...purchaData, Amount: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
