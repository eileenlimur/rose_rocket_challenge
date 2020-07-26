import React from "react";

export default function Driver(props) {
  
  return (
    <form action="#">
      <label for="driver">Driver: </label>
      <select name="driver" id="driver">
        <option value={props.name}>{props.name}</option>
        <option value={props.name}>{props.name}</option>
      </select>
    </form>
  )
}