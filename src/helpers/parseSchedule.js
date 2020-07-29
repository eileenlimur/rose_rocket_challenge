export default function parseSchedule(unparsedSchedule) {
  let parsedSchedule = { ...unparsedSchedule };
  console.log(parsedSchedule);
  for (let driverKey in parsedSchedule) {
    if (Object.keys(parsedSchedule[driverKey]["schedule"]).length > 0) {
      for (let weekKey in parsedSchedule[driverKey]["schedule"]) {
        if (Object.keys(parsedSchedule[driverKey]["schedule"][weekKey]).length > 0) {
          for (let dayKey in parsedSchedule[driverKey]["schedule"][weekKey]) {
            if (Object.keys(parsedSchedule[driverKey]["schedule"][weekKey][dayKey]).length > 0) {
              for (let hourKey in parsedSchedule[driverKey]["schedule"][weekKey][dayKey]) {
                const task = parsedSchedule[driverKey]["schedule"][weekKey][dayKey][hourKey]["task"];
                const duration = Number(parsedSchedule[driverKey]["schedule"][weekKey][dayKey][hourKey]["hours"]);
                if (duration > 1) {
                  for (let i = 1; i < duration; i++ ) {
                    parsedSchedule[driverKey]["schedule"][weekKey][dayKey][Number(hourKey) + i] = { task: `Cont'd: ${task}`};
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return parsedSchedule;
}