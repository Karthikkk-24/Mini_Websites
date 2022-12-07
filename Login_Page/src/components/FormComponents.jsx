import React, { ReactDOM, ReactPropTypes } from "react";

export default function FormComponents() {
  let textStyle = {
    color: "black",
    fontWeight: "bold",
    fontSize: "17px",
  };
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={textStyle}>
            Enter Username:
            {/* Label={props.label}: */}
          </span>
        </label>
        <input
          type="Enter text"
          placeholder="Enter text"
          className="input input-bordered w-full form-control input-md w-100"
        />
      </div>
    </div>
  );
}
