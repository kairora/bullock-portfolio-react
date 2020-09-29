import React from "react";
import "../../styles/Portfolio.css";
import Projects from "../Project";
import Card from "../Card";

export const styledPortCard = {
  marginLeft: "auto",
  marginRight: "auto",
  minWidth: "100vw" 
}
export const tooltipper = {
    backgroundColor: "#17a2b8 !important;",
    color: "white !important;",
    margin: "15px!important;",
}

export default function() {

  return (
    <Card style={styledPortCard, tooltipper}>
      <Projects />
    </Card>

  );
}


