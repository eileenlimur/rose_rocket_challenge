export default function conflictCheck (taskDriver, taskWeek, taskDay, taskHour, taskDuration, schedule, taskType, location) {
  console.log(taskDriver, taskWeek, taskDay, taskHour, taskDuration, schedule, location);
  for (let i = 0; i < taskDuration; i++) {
    if (schedule[taskDriver]["schedule"][taskWeek] && schedule[taskDriver]["schedule"][taskWeek][taskDay]) {
      const taskHourNum = Number(taskHour) + i
      if (Object.keys(schedule[taskDriver]["schedule"][taskWeek][taskDay]).includes((taskHourNum.toString()))) {
        return {conflictDriver: Number(taskDriver), conflictWeek: Number(taskWeek), conflictDay: Number(taskDay), conflictTime: taskHourNum, conflictDuration: Number(taskDuration), conflictTaskType: taskType, conflictLocation: location};
      }
    }
  }
  return false;
}