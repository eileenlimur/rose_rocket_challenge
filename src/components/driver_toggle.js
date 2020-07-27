import React from "react";

export default function Driver(props) {
  console.log(props.drivers);
  const driverList = Object.keys(props.drivers).map((driver, index) => {
    return (
      <option key={index}
        value={props.drivers[driver]["id"]}>
        {props.drivers[driver]["name"]}
      </option>
    );
  });

  return (
    <form action="#">
      <label htmlFor="drivers">Driver: </label>
      <select name="drivers" id="drivers" onChange={(evt) => props.onChange(evt.target.value)}>
        {driverList}
      </select>
    </form>
  );
}
