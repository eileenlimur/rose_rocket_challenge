import React from "react";
import Week from "./week";
import "./calendar.css";

export default function Calendar(props) {

  const twentyfourHours = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];
  const week = twentyfourHours.map((hour, index) => <Week key={index} hour={hour}/>);

  return (
    <table className="calendar-whole">
      <thead>
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
      </thead>
      <tbody>
        {week}
      </tbody>
    </table>
  )
}