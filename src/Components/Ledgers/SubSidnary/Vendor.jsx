import React from "react";
import "./Vendor.css";

export default function Vendor({ vendorData, setvendorData }) {
  return (
    <div className="vendor-container">
      <div className="vendor-subConatiner">
        <label htmlFor="vendorId">
          Vendor ID <span>*</span>
        </label>
        <input
          id="vendorId"
          type="text"
          name="vendorId"
          value={vendorData.vendorId}
          onChange={(event) => {
            setvendorData({ ...vendorData, vendorId: event.target.value });
          }}
        />
      </div>

      <div className="vendor-subConatiner">
        <label htmlFor="vendorName">
          Vendor Name <span>*</span>
        </label>
        <input
          id="vendorName"
          type="text"
          name="vendorName"
          value={vendorData.vendorName}
          onChange={(event) => {
            setvendorData({ ...vendorData, vendorName: event.target.value });
          }}
        />
      </div>

      <div className="vendor-subConatiner">
        <label htmlFor="Vcontact">
          Vendor Contact Number <span>*</span>
        </label>
        <input
          id="Vcontact"
          type="number"
          name="Vcontact"
          value={vendorData.Vcontact}
          onChange={(event) => {
            setvendorData({ ...vendorData, Vcontact: event.target.value });
          }}
        />
      </div>

      <div className="vendor-subConatiner">
        <label htmlFor="Vemail">
          Vendor Email <span>*</span>
        </label>
        <input
          id="Vemail"
          type="email"
          name="Vemail"
          value={vendorData.Vemail}
          onChange={(event) => {
            setvendorData({ ...vendorData, Vemail: event.target.value });
          }}
        />
      </div>

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
