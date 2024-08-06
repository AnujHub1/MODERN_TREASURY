import React from "react";
import "../../../css/InterInput.css";
import { useFormContext } from "react-hook-form";

export default function BatchDetail({ cashData, setCashData }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="Batch-container">
      <div className="Batch-subConatiner">
        <label htmlFor="batchId">
          Batch ID <span>*</span>
        </label>
        <input
          {...register("batchId", { required: "id is required" })}
          id="batchId"
          type="text"
          name="batchId"
          value={cashData.batchId}
          onChange={(event) => {
            setCashData({ ...cashData, batchId: event.target.value });
          }}
        />
        {errors.batchId && (
          <p className="error-para">{errors.batchId.message}</p>
        )}
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="batch_Name">
          Batch Name <span>*</span>
        </label>
        <input
          {...register("batch_Name", { required: "name is required" })}
          id="batch_Name"
          type="text"
          name="batch_Name"
          value={cashData.batch_Name}
          onChange={(event) => {
            setCashData({ ...cashData, batch_Name: event.target.value });
          }}
        />
        {errors.batch_Name && (
          <p className="error-para">{errors.batch_Name.message}</p>
        )}
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="batchType">
          Batch Type <span>*</span>
        </label>
        <input
          {...register("batchType", { required: "type is required" })}
          id="batchType"
          type="number"
          name="batchType"
          value={cashData.batchType}
          onChange={(event) => {
            setCashData({ ...cashData, batchType: event.target.value });
          }}
        />
        {errors.batchType && (
          <p className="error-para">{errors.batchType.message}</p>
        )}
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="batchDate">
          Date <span>*</span>
        </label>
        <input
          {...register("batchDate", { required: "date is required" })}
          id="batchDate"
          type="Date"
          name="batchDate"
          value={cashData.batchDate}
          onChange={(event) => {
            setCashData({ ...cashData, batchDate: event.target.value });
          }}
        />
        {errors.batchDate && (
          <p className="error-para">{errors.batchDate.message}</p>
        )}
      </div>
    </div>
  );
}
