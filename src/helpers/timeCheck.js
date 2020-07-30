export default function timeCheck(hour, duration) {
  const numHour = Number(hour);
  const durHour = Number(duration);
  if (numHour + durHour > 24) {
    return false;
  }
  return true;
}