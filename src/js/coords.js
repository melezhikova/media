export default function getCoords(value) {
  let string = value.replace(/\s/g, '').trim();
  const oneBracket = string.indexOf('[');
  if (oneBracket === 0) {
    string = string.substring(1, string.length);
  }
  const twoBracket = string.indexOf(']');
  if (twoBracket === string.length - 1) {
    string = string.substring(0, string.length - 1);
  }
  const comma = string.indexOf(',');
  const latitude = string.substring(0, comma);
  const longitude = string.substring(comma + 1, string.length);
  if (latitude * longitude) {
    return `[${latitude}, -${longitude}]`;
  }
  return false;
}
