import React from "react";
import Hour from "./hour";

export default function Day(props) {
  let tasks = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  
  if (props.schedule !== null) {
    Object.keys(props.schedule).map(key => {
      tasks[key] = props.schedule[key]['task'];
    })
  }
  
  const day = tasks.map((event, index) => <Hour key={index} contents={event} onEdit = {()=>props.onEdit(index)} onDelete = {()=>props.onDelete(index)} weekday={props.weekday ? true : false}/>)

  return (<>{day}</>);
}