import React from "react";
import "./BatchDetail.css";
export default function BatchInvoice({ formData, setFormdata }) {
  return (
    <div className="Batch-container">
      <div className="Batch-subConatiner">
        <label htmlFor="invoiceNum">
          Invoice Number<span>*</span>
        </label>
        <input
          id="invoiceNum"
          type="number"
          name="invoiceNum"
          value={formData.invoiceNum}
          onChange={(event) => {
            setFormdata({ ...formData, invoiceNum: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="invoiceId">
          Transaction ID <span>*</span>
        </label>
        <input
          id="invoiceId"
          type="text"
          name="invoiceId"
          value={formData.invoiceId}
          onChange={(event) => {
            setFormdata({ ...formData, invoiceId: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="invose_Type">
          Transaction Type<span>*</span>
        </label>
        <input
          id="invose_Type"
          type="number"
          name="invose_Type"
          value={formData.invose_Type}
          onChange={(event) => {
            setFormdata({ ...formData, invose_Type: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="Tran_Date">
          Date <span>*</span>
        </label>
        <input
          id="Tran_Date"
          type="Date"
          name="Tran_Date"
          value={formData.Tran_Date}
          onChange={(event) => {
            setFormdata({ ...formData, Tran_Date: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
