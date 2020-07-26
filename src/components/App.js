import React from "react";
import DayToggle from "./day_toggle";
import DriverToggle from "./driver_toggle";
import Calendar from "./Calendar";

export default function App() {
  return (
    <body class="app">
      This is rose rocket's coding challenge
      <div class="selections-bar">
        <DayToggle day="Tuesday"/>
        <DriverToggle name="Fierce Bob" />
      </div>
      <Calendar />
    </body>
  );
}
