import React from "react";
import "../../styles/Portfolio.css";
import Projects from "../Project";
import Card from "../Card";

export default function() {
  return (
    <Card style={
      
      {minWidth: "90vw" }
      }>
      <Projects />
    </Card>

  );
}


