import createMessage from './createMessage';

export function getCoords(value) {
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
    return { latitude, longitude };
  }
  return false;
}

export function getLocation(time, value) {
  const modal = document.querySelector('.modal');
  modal.classList.add('active');
  const form = modal.querySelector('#location');
  const input = modal.querySelector('.location');
  const cancel = modal.querySelector('.cancel');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.includes(',')) {
      const inputed = getCoords(input.value);
      if (inputed === false) {
        alert('Проверьте правильность ввода');
      } else {
        modal.classList.remove('active');
        const coords = `[${inputed.latitude}, -${inputed.longitude}]`;
        createMessage(time, value, coords);
      }
    } else {
      alert('Проверьте правильность ввода');
    }
  });
  cancel.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}
