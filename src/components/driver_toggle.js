import React from "react";

export default function Driver(props) {
  const driverList = Object.keys(props.drivers).map((driver, index) => {
    return (
      <option key={index} value={props.drivers[driver]}>
        {props.drivers[driver]["name"]}
      </option>
    );
  });

  return (
    <form action="#">
      <label htmlFor="drivers">Driver: </label>
      <select name="drivers" id="drivers">
        {driverList}
      </select>
    </form>
  );
}
