export default function scheduleMaker(scheduleObj) {
  const schedule = [];
  for (let i = 1; i++; i <= 24) {
    if (scheduleObj[i]) {
      schedule.push(scheduleObj[i])
    } else {
      schedule.push(null);
    }
  }
  return schedule;
}