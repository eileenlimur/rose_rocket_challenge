import React, { useState, useEffect } from "react";
import DayToggle from "./DayToggle";
import DriverToggle from "./DriverToggle";
import Calendar from "./Calendar";
import drivers from "../database/schedule";

export default function App() {
  const [week, setWeek] = useState(1);
  const [driver, setDriver] = useState(1);
  const [mode, setMode] = useState("default");

  const changeDriver = function(driverId) {
    setDriver(driverId);
  }
  const changeWeek = function(change) {
    if (week + change >0 && week + change <= 52) {
      setWeek(prev=> prev + change);
    }
  }
  const showForm = function() {

  }

  return (
    <div className="app">
      <header className="selections-bar">
        <DriverToggle drivers={drivers} driver={driver} onChange={changeDriver}/>
        <DayToggle week={week} onChange={changeWeek}/>
        <a href=""><em>Print Schedule</em></a>
      </header>
      <div className="add-task">
        {mode === "default" &&
        <div >
          <a href=""><em>Add Task</em></a>
        </div>}
        {/* {mode === "show-form" && } */}
      </div>
      <Calendar schedule={drivers[driver]["schedule"][week]}/>
    </div>
  );
}
