import React from "react";
import Hour from "./hour";
import schedule_maker from "././helpers/schedule_maker";

export default function Day(props) {
  console.log(props.schedule);
  const schedule1 = ["Feed a dog", "Hug a hog", "Feed a dog", null, "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog", "Feed a dog", "Hug a hog"];
  const schedule =
  // for (let i = 1; i++; i <= 24) {
  //   // console.log(props.schedule[i])
  //   if (props.schedule[i]) {
  //     schedule.push(props.schedule[i])
  //   } else {
  //     schedule.push(null);
  //   }
  // }

  console.log(schedule);

  const day = schedule.map((event, index) => <Hour contents={event} key={index}/>)

  return (
    <>
      {day}
    </>
  )
}