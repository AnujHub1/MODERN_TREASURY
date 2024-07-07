import React from "react";
import "./BatchDetail.css";

export default function BatchDetail({ cashData, setCashData }) {
  return (
    <div className="Batch-container">
      <div className="Batch-subConatiner">
        <label htmlFor="batchId">
          Batch ID <span>*</span>
        </label>
        <input
          id="batchId"
          type="text"
          name="batchId"
          value={cashData.batchId}
          onChange={(event) => {
            setCashData({ ...cashData, batchId: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="batch_Name">
          Batch Name <span>*</span>
        </label>
        <input
          id="batch_Name"
          type="text"
          name="batch_Name"
          value={cashData.batch_Name}
          onChange={(event) => {
            setCashData({ ...cashData, batch_Name: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="batchType">
          Batch Type <span>*</span>
        </label>
        <input
          id="batchType"
          type="number"
          name="batchType"
          value={cashData.batchType}
          onChange={(event) => {
            setCashData({ ...cashData, batchType: event.target.value });
          }}
        />
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="batchDate">
          Date <span>*</span>
        </label>
        <input
          id="batchDate"
          type="Date"
          name="batchDate"
          value={cashData.batchDate}
          onChange={(event) => {
            setCashData({ ...cashData, batchDate: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
