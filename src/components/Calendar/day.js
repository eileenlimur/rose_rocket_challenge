import React, { useState, useEffect} from "react";
import Hour from "./hour";

export default function Day(props) {
  const emptyDay = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  
  //TASKS is an array of all the day's tasks with empty strings as placeholders in empty cells
  const [tasks, setTasks] = useState(emptyDay);
  //DAY is an array of Day components created using TASKS
  const [day, setDay] = useState([]);
  
  useEffect(() => {
    setTasks(prev=>[...prev], emptyDay);
    if (!Array.isArray(props.schedule)) {
      Object.keys(props.schedule).forEach((key) => {
        const nextTask = props.schedule[key]['task'];
        const newTasks = tasks;
        newTasks[key] = nextTask;
        setTasks(prev=>[...prev], newTasks);
      })
    }

    const daySched = tasks.map((event, index) => <Hour key={index} contents={event}/>);
    setDay(daySched);
  }, [props.schedule])
  
  return (<>{day}</>);
}