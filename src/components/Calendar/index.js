import React from "react";
import Week from "./week";

export default function Calendar(props) {

  return (
    <div>
      <div>Weekday</div>
      <div>time slot</div>
      <Week />
    </div>
  )
}