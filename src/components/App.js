import React, { useState, useEffect } from "react";
import DayToggle from "./DayToggle";
import DriverToggle from "./DriverToggle";
import Calendar from "./Calendar";
import scheduleObj from "../database/schedule";
import NewTask from "./NewTask";
import Conflict from "./Conflict";
import parseSchedule from "../helpers/parseSchedule";
import conflictCheck from "../helpers/conflictCheck";

export default function App() {
  const [week, setWeek] = useState(1);
  const [driver, setDriver] = useState(1);
  const [formMode, setForm] = useState("hidden");
  const [schedule, setSchedule] = useState({ ...scheduleObj });
  //parsed schedule renders calendar including blocks ocucpied by multi-hour tasks
  const [parsedSchedule, setParsedSchedule] = useState({ ...scheduleObj });
  const [edit, setEdit] = useState({
    taskType: "",
    location: "",
    weekday: "",
    time: "",
    duration: "",
    week: "",
  });
  const [saveConflict, setSaveConflict] = useState(null);

  const changeDriver = function (driverId) {
    setDriver(driverId);
  };
  const changeWeek = function (change) {
    if (week + change > 0 && week + change <= 52) {
      setWeek((prev) => prev + change);
    }
  };
  const toggleForm = function (edit) {
    if (edit === true) {
      if (formMode === "edit-form") {
        setForm("show-form");
      } else {
        setForm("edit-form");
      }
    } else {
      if (formMode === "hidden") {
        setForm("show-form");
      } else {
        setForm("hidden");
        setEdit({
          taskType: "",
          location: "",
          weekday: "",
          time: "",
          duration: "",
          week: "",
        });
      }
    }
  };
  const editTask = function (day, hour) {
    const fakeSched = { ...schedule };
    const editObj = {
      taskType: fakeSched[driver]["schedule"][week][day][hour]["task"].split(
        ": "
      )[0],
      location: fakeSched[driver]["schedule"][week][day][hour]["task"].split(
        ": "
      )[1],
      weekday: day,
      time: hour,
      duration: fakeSched[driver]["schedule"][week][day][hour]["hours"],
      week: week,
    };
    setEdit((prev) => ({ ...prev, ...editObj }));
    toggleForm(true);
    window.scrollTo(0, 0);
    setSchedule((prev) => ({ ...prev, ...fakeSched }));
  };

  const deleteTask = function (day, hour) {
    const fakeSched = { ...schedule };
    const hoursToDelete =
      fakeSched[driver]["schedule"][week][day][hour]["hours"];
    delete fakeSched[driver]["schedule"][week][day][hour];
    for (let i = 1; i < hoursToDelete; i++) {
      delete fakeSched[driver]["schedule"][week][day][hour + i];
    }
    setSchedule((prev) => ({ ...prev, ...fakeSched }));
  };

  const cancelOverwrite = function() {
    setForm("hidden");
    setSaveConflict(null);
  }

  const overwrite = function (driver, week, day, hour, schedule, duration, task, location) {
    let fakeSched = { ...schedule };
    let taskStartHour = hour;

    let i = 0;
    while (fakeSched[driver]["schedule"][week][day][hour - i] && fakeSched[driver]["schedule"][week][day][hour - i]['task'][0] === "M") {
      taskStartHour = hour - 1 - i
      i++;
    }

    const hoursToDelete = fakeSched[driver]["schedule"][week][day][taskStartHour]["hours"];
    for (let i = 0; i < Number(hoursToDelete); i++) {
      delete fakeSched[driver]["schedule"][week][day][taskStartHour + i];
      console.log(fakeSched);
    }
    fakeSched[driver]["schedule"][week][day][hour] = {duration: duration, task: `${task}: ${location}`};
    setSchedule(prev => ({ ...prev, ...fakeSched }));
    setParsedSchedule(prev => ({ ...prev, ...fakeSched }))
    setSaveConflict(null);
    setForm("hidden");
  }

  const activateOverwrite = function() {
    overwrite(saveConflict.conflictDriver, saveConflict.conflictWeek, saveConflict.conflictDay, saveConflict.conflictTime, schedule, saveConflict.conflictDuration, saveConflict.conflictTaskType, saveConflict.conflictLocation);
    console.log(saveConflict);
  }
//driver, taskType, location, week, weekday, time, duration, originalData
  const saveTask = function (
    driver,
    taskType,
    location,
    week,
    weekday,
    time,
    duration
  ) {
    const timeNum = Number(time);
    const durationNum = Number(duration);
    let updatedSchedule = { ...schedule };
    const conflictObject = conflictCheck(
      driver,
      week,
      weekday,
      time,
      duration,
      schedule,
      taskType,
      location
    );
    if (conflictObject) {
      setSaveConflict(prev=>({...prev, ...conflictObject}));
      console.log(saveConflict);
      return;
    }

    if (!updatedSchedule[driver]["schedule"][week]) {
      updatedSchedule[driver]["schedule"][week] = {
        [weekday]: {
          [timeNum]: { hours: durationNum, task: `${taskType}: ${location}` },
        },
      };
    } else if (!updatedSchedule[driver]["schedule"][week][weekday]) {
      updatedSchedule[driver]["schedule"][week][weekday] = {
        [timeNum]: { hours: durationNum, task: `${taskType}: ${location}` },
      };
    } else {
      updatedSchedule[driver]["schedule"][week][weekday][timeNum] = {
        hours: durationNum,
        task: `${taskType}: ${location}`,
      };
    }
    setSchedule(prev => ({ ...prev, ...updatedSchedule }));
    toggleForm(false);
  };

  const saveAndDeleteTask = function (
    driver,
    taskType,
    location,
    week,
    weekday,
    time,
    duration,
    originalData
  ) {
    const timeNum = Number(time);
    const durationNum = Number(duration);
    let updatedSchedule = { ...schedule };
    deleteTask(originalData.weekday, originalData.time);
    if (!updatedSchedule[driver]["schedule"][week]) {
      updatedSchedule[driver]["schedule"][week] = {
        [weekday]: {
          [timeNum]: { hours: durationNum, task: `${taskType}: ${location}` },
        },
      };
    } else if (!updatedSchedule[driver]["schedule"][week][weekday]) {
      updatedSchedule[driver]["schedule"][week][weekday] = {
        [timeNum]: { hours: durationNum, task: `${taskType}: ${location}` },
      };
    } else if (updatedSchedule[driver]["schedule"][week][weekday]) {
      updatedSchedule[driver]["schedule"][week][weekday][timeNum] = {
        hours: durationNum,
        task: `${taskType}: ${location}`,
      };
    }
    setSchedule((prev) => ({ ...prev, ...updatedSchedule }));
    toggleForm(false);
  };

  useEffect(() => {
    const parsedSched = parseSchedule({ ...schedule });
    setParsedSchedule((prev) => ({ ...prev, ...parsedSched }));
  }, [schedule]);

  return (
    <div className="app">
      <header className="selections-bar">
        <DriverToggle
          drivers={schedule}
          driver={driver}
          onChange={changeDriver}
        />
        <DayToggle week={week} onChange={changeWeek} />
        <a>
          <em>Print Schedule</em>
        </a>
      </header>
      <div className="add-task">
        <a onClick={() => toggleForm(false)}>
          <em>Add Task</em>
        </a>
        {formMode === "show-form" && (
          <NewTask
            onSave={saveTask}
            driver={driver}
            week={edit.week}
            taskType={edit.taskType}
            location={edit.location}
            weekday={edit.weekday}
            time={edit.time}
            duration={edit.duration}
          />
        )}
        {formMode === "edit-form" && (
          <NewTask
            onSave={saveAndDeleteTask}
            driver={driver}
            week={edit.week}
            taskType={edit.taskType}
            location={edit.location}
            weekday={edit.weekday}
            time={edit.time}
            duration={edit.duration}
          />
        )}
      </div>
      {saveConflict &&
      <Conflict
        conflictObj={saveConflict}
        overWrite={activateOverwrite}
        cancel={cancelOverwrite}
      />
      }
      <Calendar
        schedule={
          parsedSchedule[driver]["schedule"][week]
            ? parsedSchedule[driver]["schedule"][week]
            : null
        }
        onEdit={(day, hour) => editTask(day, hour)}
        onDelete={(day, hour) => deleteTask(day, hour)}
        week={week}
      />
    </div>
  );
}
