import React, { useState, useEffect} from "react";
import Hour from "./hour";

export default function Day(props) {
  const emptyDay = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  const [schedule, setSchedule] = useState(emptyDay);
  const [day, setDay] = useState([]);
  

  useEffect(() => {
    setSchedule(prev=>[...prev], emptyDay);
    setDay(prev=>[...prev], emptyDay);
    
    if (!Array.isArray(props.schedule)) {
      Object.keys(props.schedule).forEach((key) => {
        const nextTask = props.schedule[key]['task'];
        const newSched = schedule;
        newSched[key] = nextTask;
        setSchedule(prev=>[...prev], newSched);
      })
    }

    const daySched = schedule.map((event, index) => <Hour key={index} contents={event}/>);
    setDay(daySched);
  }, [props.schedule])
  
  return (<>{day}</>);
}