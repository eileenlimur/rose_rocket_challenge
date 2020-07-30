import React from "react";
import classnames from "classnames";

export default function Hour(props) {

  const hourClass = classnames("schedule-block", {
    "schedule-block-continued": props.contents.includes("Cont'd")
  });

  return (
    <td className={hourClass}>
      {props.contents}
      {props.contents !== "" && props.weekday === false && !props.contents.includes("Cont'd") &&
      <>
        <a className="edit-button" onClick = {props.onEdit} >Edit</a>
        <a className="delete-button" onClick = {props.onDelete} >Delete</a>
      </>
      }
    </td>
  )
}