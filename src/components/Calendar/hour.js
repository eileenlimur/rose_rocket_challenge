import React from "react";
import classnames from "classnames";

export default function Hour(props) {

  const hourClass = classnames("schedule-block", {
    "schedule-block-continued": props.contents.includes("Cont'd")
  });

  return (
    <td className={hourClass}>
      {props.contents}
    </td>
  )
}