export default function timeCheck(hour, duration) {
  if (hour + duration > 24) {
    return false;
  }
  return true;
}