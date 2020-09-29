import React from "react";
import "../../styles/Portfolio.css";
import Projects from "../Project";
import Card from "../Card";

export const styledPortCard = {
  marginLeft: "auto",
  marginRight: "auto",
  minWidth: "100vw" 
}

export default function() {

  return (
    <Card style={styledPortCard}>
      <Projects />
    </Card>

  );
}


