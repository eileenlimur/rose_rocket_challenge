export default function conflictCheck (taskDriver, taskWeek, taskDay, taskHour, taskDuration, schedule) {
  console.log(taskDriver, taskWeek, taskDay, taskHour, taskDuration, schedule);
  for (let i = 0; i < taskDuration; i++) {
    if (schedule[taskDriver]["schedule"][taskWeek] && schedule[taskDriver]["schedule"][taskWeek][taskDay]) {
      const taskHourNum = Number(taskHour) + i
      if (Object.keys(schedule[taskDriver]["schedule"][taskWeek][taskDay]).includes((taskHourNum.toString()))) {
        return {conflictTime: taskHourNum, conflictTask: schedule[taskDriver]["schedule"][taskWeek][taskDay][Number(taskHour) + i]["task"]}
      }
    }
  }
  return false;
}