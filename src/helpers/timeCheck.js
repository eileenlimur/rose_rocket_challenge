export default function timeChec(hour, duration) {
  if (hour + duration > 24) {
    return false;
  }
  return true;
}