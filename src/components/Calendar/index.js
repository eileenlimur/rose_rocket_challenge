import React from "react";
import Week from "./week";
import "./calendar.css";

export default function Calendar(props) {

  return (
    <table class="calendar-whole">
      <tr>
        <td></td>
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wednesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
      </tr>
      <Week/>
    </table>
  )
}