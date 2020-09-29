import React from "react";

import { styledPortCard } from "../pages/Portfolio"


export default function (props) {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="card flex-container" style={styledPortCard}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}