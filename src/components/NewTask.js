import React, { useState } from "react";

export default function NewTask(props) {
  const [driver, setDriver] = useState(props.driver || "")
  const [taskType, setTaskType] = useState(props.taskType || "")
  const [location, setLocation] = useState(props.location || "")
  const [week, setWeek] = useState(props.week || "")
  const [weekday, setWeekday] = useState(props.weekday || "")
  const [time, setTime] = useState(props.time || "")
  const [duration, setDuration] = useState(props.duration || "")
  const [error, setError] = useState("")
  const originalData = {weekday: props.weekday, time: props.time};

  const validate = (e) => {
    //stretch goal: check for whole numbers
    e.preventDefault();
    if (driver === "" || taskType === "" || location === "" || week === "" || weekday === "" || time === "" || duration === "") {
      setError("error");
    } else {
      setError("");
      props.onSave(driver, taskType, location, week, weekday, time, duration, originalData)
    }
  }

  return (
  <>
    <form className="new-task-form" action="#">
      {error === "error" &&
      <p className="error">FIELDS CAN'T BE BLANK</p>}

      <select name="drivers" id="drivers" value={driver} onChange={(e)=>setDriver(e.target.value)}>
        <option
          disabled=""
          value=""
          >
          Driver:
        </option>
        <option
          value={1}>
          Fierce Bob
        </option>
        <option
          value={2}>
          Tough Nancy
        </option>
        <option
          value={3}>
          Silly Jones
        </option>
      </select>
      <select name="tasks" id="tasks" value={taskType} onChange={(e)=>setTaskType(e.target.value)}>
        <option
          disabled=""
          value=""
          >
          Task Type:
        </option>
        <option
          value="Pickup"
          selected={props.taskType === "Pickup"}
          >
          Pickup
        </option>
        <option
          value="Dropoff"
          selected={props.taskType === "Dropoff"}
          >
          Dropoff
        </option>
        <option
          value="Other"
          selected={props.taskType === "Other"}
          >
          Other
        </option>
      </select>
      <input
        placeholder={location !== "" ? location : "Task Location/Description:"}
        value={location}
        onChange={(e)=>setLocation(e.target.value)}/>
      <input type="number" value={week} onChange={event => setWeek(event.target.value)} id="week" placeholder="Week Number:" min="1" max="52" step="1"/>
      <select name="weekday" id="weekday" value={weekday} onChange={(e)=>setWeekday(e.target.value)}>
        <option
          disabled=""
          value=""
          >
          Day Of Week:
        </option>
        <option
          value={1}>
          Sunday
        </option>
        <option
          value={2}>
          Monday
        </option>
        <option
          value={3}>
          Tuesday
        </option>
        <option
          value={4}>
          Wednesday
        </option>
        <option
          value={5}>
          Thursday
        </option>
        <option
          value={6}>
          Friday
        </option>
        <option
          value={7}>
          Saturday
        </option>
      </select>
      <input type="number" value={time} onChange={event => setTime(event.target.value)} id="time" placeholder="Time (24 hr):" min="0" max="23" step="1"/>
      <input type="number" value={duration} onChange={event => setDuration(event.target.value)} id="duration" placeholder="Duration (hrs):" min="1" max="24" step="1"/>
      <button type="submit" onClick={validate}>Submit</button>
    </form>
  </>)
}