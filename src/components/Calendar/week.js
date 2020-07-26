import React from "react";
import Day from "./day";

export default function Week(props) {
  return (
    <tr className="calendar-week">
      <th scope="row">{props.hour}</th>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
    </tr>
  )
}