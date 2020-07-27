import React from "react";
import Day from "./day";
import Hour from "./hour";
import "./calendar.css";

export default function Calendar(props) {

  const twentyfourHours = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];
  const hours = twentyfourHours.map((hour, index) => <Hour contents={hour} key={index}/>)
  
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const week = days.map((day, index) => {
    const emptyDay = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    const schedule = props.schedule[index + 1] ? props.schedule[index + 1] : emptyDay;
    return (
      <tr>
        <th className="calendar-weekday-header">
          {day}
        </th>
        <Day key={index} schedule={schedule}/>
      </tr>
    )
  })

  return (
    <table className="calendar-whole">
      <tbody>
        <tr>
          <td className="blank-block"/>
          {hours}
        </tr>
        {week}
      </tbody>
    </table>
  )
}