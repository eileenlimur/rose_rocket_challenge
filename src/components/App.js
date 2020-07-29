import React, { useState, useEffect } from "react";
import DayToggle from "./DayToggle";
import DriverToggle from "./DriverToggle";
import Calendar from "./Calendar";
import scheduleObj from "../database/schedule";
import NewTask from "./NewTask"

export default function App() {
  const [week, setWeek] = useState(1);
  const [driver, setDriver] = useState(1);
  const [formMode, setForm] = useState("hidden");
  const [schedule, setSchedule] = useState(scheduleObj);

  console.log(schedule[1]['schedule']);

  const changeDriver = function(driverId) {
    setDriver(driverId);
  }
  const changeWeek = function(change) {
    if (week + change > 0 && week + change <= 52) {
      setWeek(prev=> prev + change);
    }
  }
  const toggleForm = function(e) {
    e.preventDefault();
    if (formMode === "hidden") {
      setForm("show-form");
    } else {
      setForm("hidden");
    }
  }
  function saveTask(driver, taskType, location, week, weekday, time, duration) {
    const timeNum = Number(time);
    const durationNum = Number(duration);
    let updatedSchedule = schedule;

    if (updatedSchedule[driver]['schedule'][week][weekday]) {
      console.log(1)
      updatedSchedule[driver]['schedule'][week][weekday][timeNum] = {hours: duration, task: `${taskType}: ${location}`}
    } else if (updatedSchedule[driver]['schedule'][week]) {
      console.log(2);
      updatedSchedule[driver]['schedule'][week][weekday] = {[timeNum]: {hours: durationNum, task: `${taskType}: ${location}`}}
    }
    else {
      console.log(3);
      updatedSchedule[driver]['schedule'][week] = {weekday: {time: {hours: duration, task: `${taskType}: ${location}`}}}
    }
    setSchedule(updatedSchedule);
  }

  return (
    <div className="app">
      <header className="selections-bar">
        <DriverToggle drivers={schedule} driver={driver} onChange={changeDriver}/>
        <DayToggle week={week} onChange={changeWeek}/>
        <a href=""><em>Print Schedule</em></a>
      </header>
      <div className="add-task">
          <a href="" onClick={toggleForm}><em>Add Task</em></a>
        {formMode === "show-form" && 
          <NewTask onSave={saveTask}/>}
      </div>
      <Calendar schedule={schedule[driver]["schedule"][week]}/>
    </div>
  );
  
}
