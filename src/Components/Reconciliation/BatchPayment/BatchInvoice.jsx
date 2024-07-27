import React from "react";
import "./BatchDetail.css";
import { useFormContext } from "react-hook-form";

export default function BatchInvoice({ formData, setFormdata }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="Batch-container">
      <div className="Batch-subConatiner">
        <label htmlFor="invoiceNum">
          Invoice Number<span>*</span>
        </label>
        <input
          {...register("invoiceNum", { required: "number is required" })}
          id="invoiceNum"
          type="number"
          name="invoiceNum"
          value={formData.invoiceNum}
          onChange={(event) => {
            setFormdata({ ...formData, invoiceNum: event.target.value });
          }}
        />
        {errors.invoiceNum && (
          <p className="error-para">{errors.invoiceNum.message}</p>
        )}
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="invoiceId">
          Transaction ID <span>*</span>
        </label>
        <input
          {...register("invoiceId", { required: "id is required" })}
          id="invoiceId"
          type="text"
          name="invoiceId"
          value={formData.invoiceId}
          onChange={(event) => {
            setFormdata({ ...formData, invoiceId: event.target.value });
          }}
        />
        {errors.invoiceId && (
          <p className="error-para">{errors.invoiceId.message}</p>
        )}
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="invose_Type">
          Transaction Type<span>*</span>
        </label>
        <input
          {...register("invose_Type", { required: "type is required" })}
          id="invose_Type"
          type="number"
          name="invose_Type"
          value={formData.invose_Type}
          onChange={(event) => {
            setFormdata({ ...formData, invose_Type: event.target.value });
          }}
        />
        {errors.invose_Type && (
          <p className="error-para">{errors.invose_Type.message}</p>
        )}
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="Tran_Date">
          Date <span>*</span>
        </label>
        <input
          {...register("Tran_Date", { required: "date is required" })}
          id="Tran_Date"
          type="Date"
          name="Tran_Date"
          value={formData.Tran_Date}
          onChange={(event) => {
            setFormdata({ ...formData, Tran_Date: event.target.value });
          }}
        />
        {errors.Tran_Date && (
          <p className="error-para">{errors.Tran_Date.message}</p>
        )}
      </div>
    </div>
  );
}
