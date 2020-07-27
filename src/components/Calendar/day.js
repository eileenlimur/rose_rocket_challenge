import React, { useState, useEffect} from "react";
import Hour from "./hour";

export default function Day(props) {
  const [schedule, setSchedule] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
  const [day, setDay] = useState([]);
  const schedule1 = ["Feed a dog", "Hug a hog", "Feed a dog", null, "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog"];
  
  useEffect(() => {
    if (!Array.isArray(props.schedule)) {
      Object.keys(props.schedule).forEach((key) => {
        const nextTask = props.schedule[key]['task'];
        const newSched = schedule;
        newSched[key] = nextTask;
        setSchedule(newSched);
      })
    }
    const daySched = schedule.map((event, index) => <Hour key={index} contents={event}/>);
    setDay(daySched);
  }, [])
  
  // const day = schedule.map((event, index) => <Hour key={index} contents={event}/>);

  // const day = schedule1.map((event, index) => <Hour contents={event} key={index}/>)

  return (<>{day}</>);
}