import React from "react";
import Resume from "../Resume"


export default function (props) {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="card flex-container">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}