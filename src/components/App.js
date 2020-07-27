import React, { useState } from "react";
import DayToggle from "./day_toggle";
import DriverToggle from "./driver_toggle";
import Calendar from "./Calendar";
import drivers from "../database/schedule";

export default function App() {
  const [week, setWeek] = useState(1);
  const [driver, setDriver] = useState(1);
  console.log(drivers[driver]["schedule"])

  const changeDriver = function(driverId) {
    setDriver(driverId);
  }

  return (
    <div className="app">
      <header className="selections-bar">
        <DriverToggle drivers={drivers} driver={driver} onChange={changeDriver}/>
        <DayToggle week={week}/>
        <p>Print</p>
      </header>
      <Calendar schedule={drivers[driver]["schedule"][week]}/>
    </div>
  );
}
