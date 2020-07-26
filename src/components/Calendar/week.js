import React from "react";
import Day from "./day";

export default function Week(props) {
  return (
    <tr class="calendar-week">
      <th scope="row">12 AM</th>
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