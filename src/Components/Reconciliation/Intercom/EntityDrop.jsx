import React from "react";
import "./EntityDrop.css";

export default function EntityDrop({ cashData, setCashData }) {
  return (
    <div className="Batch-container">
      <div className="Batch-subConatiner">
        <label htmlFor="Entity1">
          Entity 1<span>*</span>
        </label>
        <select id="Entity1" type="text" name="Entity1">
          <option value="">Please select</option>
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
      </div>

      <div className="Batch-subConatiner">
        <label htmlFor="Entity2">
          Entity 2<span>*</span>
        </label>
        <select id="Entity2" type="text" name="Entity2">
          <option placeholder="please select">Please select</option>
          <option className="opt" value="individual">
            Individual
          </option>
          <option value="business">Business</option>
        </select>
      </div>
    </div>
  );
}
