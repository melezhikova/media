export default function getTime() {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `${date}.${month}.${year} ${hours}:${minutes}`;
}
