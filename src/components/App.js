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
  //parsed schedule renders calendar including blocks ocucpied by multi-hour tasks
  const [schedule, setSchedule] = useState({...scheduleObj});
  const [parsedSchedule, setParsedSchedule] = useState({...scheduleObj});
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
      }
    }
  };
  const editTask = function(day, hour, deleteBoolean) {
    const fakeSched = {...schedule}
    const editObj = {taskType: fakeSched[driver]["schedule"][week][day][hour]["task"].split(": ")[0], location: fakeSched[driver]["schedule"][week][day][hour]["task"].split(": ")[1], weekday: day, time: hour, duration: fakeSched[driver]["schedule"][week][day][hour]['hours'], week: week}
    const hoursToDelete = fakeSched[driver]["schedule"][week][day][hour]['hours'];
    delete fakeSched[driver]["schedule"][week][day][hour]
    for (let i = 1; i < hoursToDelete; i++) {
      delete fakeSched[driver]["schedule"][week][day][hour + i]
    }
    if (deleteBoolean === false) {
      setEdit(prev=> ({...prev, ...editObj}))
      toggleForm(true);
      window.scrollTo(0, 0);
    }
    setSchedule(prev=>({...prev, ...fakeSched}));
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
    let updatedSchedule = {...schedule};

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
    setSchedule(prev => ({ ...prev, ...updatedSchedule }));
  };

  useEffect(() => {
    const parsedSched = parseSchedule({...schedule});
    setParsedSchedule(prev=>({...prev, ...parsedSched}));
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
        onEdit={(day, hour) => editTask(day, hour, false)}
        onDelete={(day, hour) => editTask(day, hour, true)}
        week={week}
      />
    </div>
  );
}
