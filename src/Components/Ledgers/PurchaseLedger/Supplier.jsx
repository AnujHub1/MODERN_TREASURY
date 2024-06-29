import React from "react";
import "./Supplier.css";

export default function Supplier({ purchaData, setPurchaData }) {
  return (
    <div className="supplier-container">
      <div className="supplier-subConatiner">
        <label htmlFor="supplierId">
          Supplier ID <span>*</span>
        </label>
        <input
          id="supplierId"
          type="text"
          name="supplierId"
          value={purchaData.supplierId}
          onChange={(event) => {
            setPurchaData({ ...purchaData, supplierId: event.target.value });
          }}
        />
      </div>

      <div className="supplier-subConatiner">
        <label htmlFor="supplierName">
          Name <span>*</span>
        </label>
        <input
          id="supplierName"
          type="text"
          name="supplierName"
          value={purchaData.supplierName}
          onChange={(event) => {
            setPurchaData({ ...purchaData, supplierName: event.target.value });
          }}
        />
      </div>

      <div className="supplier-subConatiner">
        <label htmlFor="contactN">
          Contact Number <span>*</span>
        </label>
        <input
          id="contactN"
          type="number"
          name="contactN"
          value={purchaData.contactN}
          onChange={(event) => {
            setPurchaData({ ...purchaData, contactN: event.target.value });
          }}
        />
      </div>

      <div className="supplier-subConatiner">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={purchaData.email}
          onChange={(event) => {
            setPurchaData({ ...purchaData, email: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
