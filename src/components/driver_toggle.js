import React from "react";

export default function Driver(props) {
  return (
    <form action="#">
      <label for="driver"></label>
      <select name="driver" id="driver">Driver:
        <option value={props.name}>{props.name}</option>
        <option value={props.name}>{props.name}</option>
      </select>
    </form>
  )
}