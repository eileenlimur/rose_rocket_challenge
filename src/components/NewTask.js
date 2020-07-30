import React, { useState } from "react";
import timeCheck from "../helpers/timeCheck";


export default function NewTask(props) {
  const [driver, setDriver] = useState(props.driver || "")
  const [taskType, setTaskType] = useState(props.taskType || "Pickup")
  const [location, setLocation] = useState(props.location || "")
  const [week, setWeek] = useState(props.week || "")
  const [weekday, setWeekday] = useState(props.weekday || "")
  const [time, setTime] = useState(props.time || "")
  const [duration, setDuration] = useState(props.duration || "")
  const [error, setError] = useState("")
  const originalData = {weekday: props.weekday, time: props.time};

  const validate = (e) => {
    e.preventDefault();
    //stretch goal: check for whole numbers
    if (timeCheck(time, duration) === false) {
      setError("time-error")
      return;
    }
    if (driver === "" || taskType === "" || location === "" || week === "" || week <= 0 || week > 52 || weekday === "" || time === "" || duration === "") {
      setError("blanks-error");
    } else {
      setError("");
      props.onSave(driver, taskType, location, week, weekday, time, duration, originalData)
    }
  }

  return (
  <>
    <form className="new-task-form" action="#">
      {error === "blanks-error" &&
        <p className="error">FILL ALL FIELDS TO PROCEED</p>}
      {error === "time-error" &&
        <p className="error">TASK CAN'T EXTEND INTO NEXT DAY</p>}
      <label>Driver:</label>
      <select name="drivers" id="drivers" value={driver} onChange={(e)=>setDriver(e.target.value)}>
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
      <label>Task Type:</label>
      <select name="tasks" id="tasks" value={taskType} onChange={(e)=>setTaskType(e.target.value)}>
        <option
          value="Pickup"
          selected={taskType === "Pickup"}
          >
          Pickup
        </option>
        <option
          value="Dropoff"
          selected={taskType === "Dropoff"}
          >
          Dropoff
        </option>
        <option
          value="Other"
          selected={taskType === "Other"}
          >
          Other
        </option>
      </select>
      <label>Task Location/Description:</label>
      <input
        placeholder={location !== "" ? location : null}
        value={location}
        onChange={(e)=>setLocation(e.target.value)}/>
      <label>Week Number:</label>
      <input type="number" value={week} onChange={event => setWeek(event.target.value)} id="week" min="1" max="52" step="1"/>
      <label>Day Of Week:</label>
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
      <label>Time Of Day (24 Hour):</label>
      <input type="number" value={time} onChange={event => setTime(event.target.value)} id="time" min="0" max="23" step="1"/>
      <label>Duration Of Task (Hour(s)):</label>
      <input type="number" value={duration} onChange={event => setDuration(event.target.value)} id="duration" min="1" max="24" step="1"/>
      <button type="submit" onClick={validate}>Submit</button>
    </form>
  </>)
}