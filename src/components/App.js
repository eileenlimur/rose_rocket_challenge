import React, { useState, useEffect } from "react";
import DayToggle from "./DayToggle";
import DriverToggle from "./DriverToggle";
import Calendar from "./Calendar";
import scheduleObj from "../database/schedule";
import NewTask from "./NewTask";
import parseSchedule from "../helpers/parseSchedule";

export default function App() {
  const [week, setWeek] = useState(1);
  const [driver, setDriver] = useState(1);
  const [formMode, setForm] = useState("hidden");
  const [schedule, setSchedule] = useState(scheduleObj);
  //parsed schedule renders calendar including blocks ocucpied by multi-hour tasks
  const [parsedSchedule, setParsedSchedule] = useState(scheduleObj);
  const [edit, setEdit] = useState({
    taskType: "",
    location: "",
    weekday: "",
    time: "",
    duration: "",
    week: ""
  });

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
      setForm("edit-form");
      return;
    } else {
      if (formMode === "hidden") {
        setForm("show-form");
      } else {
        setForm("hidden");
      }
    }
  };
  const editTask = function (day, hour) {
    console.log(day, hour);
    const editObj = {taskType: schedule[driver]["schedule"][week][day][hour]["task"].split(": ")[0], location: schedule[driver]["schedule"][week][day][hour]["task"].split(": ")[1], weekday: day, time: hour, duration: schedule[driver]["schedule"][week][day][hour]['hours'], week: week}
    setEdit(prev=> ({...prev, ...editObj}))
    toggleForm(true);
  }
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
    let updatedSchedule = schedule;

    if (!updatedSchedule[driver]["schedule"][week]) {
      console.log(0);
      updatedSchedule[driver]["schedule"][week] = {
        [weekday]: {
          [timeNum]: { hours: durationNum, task: `${taskType}: ${location}` },
        },
      };
    } else if (!updatedSchedule[driver]["schedule"][week][weekday]) {
      console.log(2);
      updatedSchedule[driver]["schedule"][week][weekday] = {
        [timeNum]: { hours: durationNum, task: `${taskType}: ${location}` },
      };
    } else if (updatedSchedule[driver]["schedule"][week][weekday]) {
      console.log(1);
      updatedSchedule[driver]["schedule"][week][weekday][timeNum] = {
        hours: durationNum,
        task: `${taskType}: ${location}`,
      };
    }
    setSchedule(prev => ({ ...prev, ...updatedSchedule }));
  };

  useEffect(() => {
    console.log(schedule[1]);
    setParsedSchedule(() => parseSchedule(schedule));
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
        <a onClick={()=>toggleForm(false)}>
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
      </div>
      <Calendar
        schedule={
          parsedSchedule[driver]["schedule"][week]
            ? parsedSchedule[driver]["schedule"][week]
            : null
        }
        onEdit={(day, hour) => editTask(day, hour)}
        onDelete={(e) => console.log(e.target.value)}
        week={week}
      />
    </div>
  );
}
