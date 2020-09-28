import React from "react";
import Resume from "../Resume"


export default function () {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <Resume/>
          </div>
        </div>
      </div>
    </>
  );
}