import React, { useState } from "react";
import Hour from "./Hour";

export default function Day(props) {
  let tasks = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

  if (props.schedule !== null) {
    Object.keys(props.schedule).map(key => {
      tasks[key] = props.schedule[key]['task'];
    })
  }
  
  const day = tasks.map((event, index) => <Hour key={index} contents={event}/>)

  return (<>{day}</>);
}