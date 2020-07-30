import React from 'react';

export default function Conflict(props) {
  console.log(props);
  //{conflictTime: 2, conflictTask: "Pickup: Eaton
 return (
   <div className="conflict-actions">
    <a>
      <em>Scheduling Conflicts Found. Resolve?</em>
    </a>
    <div className="conflict-resolution">
      <p>Conflict time:</p>
      <p><u>{props.conflictObj.conflictTime}</u></p>
      {/* <p><u>2</u></p> */}

      <p>Conflict booking:</p>
      <p><em><u>{props.conflictObj.conflictTaskType}: {props.conflictObj.conflictLocation}</u></em></p>
      {/* <p><em><u>Other: Pickup: Going to the docks</u></em></p><br/> */}
      <p><em>Edit the dispatch form or pick one of <br/>the following options to proceed.</em></p>
      <div class="conflict-resolution-button-container">
        <a className="conflict-resolution-button" onClick={props.overWrite}>Overwrite</a>
        <a className="conflict-resolution-button" onClick={props.cancel}>Cancel</a>
      </div>
      </div>
    </div>
 )
}