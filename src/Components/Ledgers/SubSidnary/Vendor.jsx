import React from "react";
import "./Vendor.css";
import { useFormContext } from "react-hook-form";

export default function Vendor({ vendorData, setvendorData }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="vendor-container">
      <div className="vendor-subConatiner">
        <label htmlFor="vendorId">
          Vendor ID <span>*</span>
        </label>
        <input
          {...register("vendorId", { required: "id is required" })}
          id="vendorId"
          type="text"
          name="vendorId"
          value={vendorData.vendorId}
          onChange={(event) => {
            setvendorData({ ...vendorData, vendorId: event.target.value });
          }}
        />
      </div>
      {errors.vendorId && (
        <p className="error-para">{errors.vendorId.message}</p>
      )}

      <div className="vendor-subConatiner">
        <label htmlFor="vendorName">
          Vendor Name <span>*</span>
        </label>
        <input
          {...register("vendorName", { required: "name is required" })}
          id="vendorName"
          type="text"
          name="vendorName"
          value={vendorData.vendorName}
          onChange={(event) => {
            setvendorData({ ...vendorData, vendorName: event.target.value });
          }}
        />
      </div>
      {errors.vendorName && (
        <p className="error-para">{errors.vendorName.message}</p>
      )}

      <div className="vendor-subConatiner">
        <label htmlFor="Vcontact">
          Vendor Contact Number <span>*</span>
        </label>
        <input
          {...register("Vcontact", { required: "contact number is required" })}
          id="Vcontact"
          type="number"
          name="Vcontact"
          value={vendorData.Vcontact}
          onChange={(event) => {
            setvendorData({ ...vendorData, Vcontact: event.target.value });
          }}
        />
      </div>
      {errors.Vcontact && (
        <p className="error-para">{errors.Vcontact.message}</p>
      )}

      <div className="vendor-subConatiner">
        <label htmlFor="Vemail">
          Vendor Email <span>*</span>
        </label>
        <input
          {...register("Vemail", {
            required: {
              value: true,
              message: "mail is required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Invalid email address",
            },
          })}
          id="Vemail"
          type="email"
          name="Vemail"
          value={vendorData.Vemail}
          onChange={(event) => {
            setvendorData({ ...vendorData, Vemail: event.target.value });
          }}
        />
      </div>
      {errors.Vemail && <p className="error-para">{errors.Vemail.message}</p>}

      <div className="vendor-subConatiner">
        <label htmlFor="texinfo">Tex Information(if applicable)</label>
        <input
          id="texinfo"
          type="text"
          name="texinfo"
          value={vendorData.texinfo}
          onChange={(event) => {
            setvendorData({ ...vendorData, texinfo: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
