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
    return `[${latitude}, -${longitude}]`;
  }
  return false;
}

export function getLocation(time, value) {
  console.log('7');
  const modal = document.querySelector('.modal');
  modal.classList.add('active');
  const form = document.querySelector('.locationForm');
  const input = document.querySelector('.location');
  const cancel = document.querySelector('.cancel');
  const messageTime = time;
  const message = value;
  input.focus();

  form.addEventListener('submit', (event) => {
    console.log('4');
    event.preventDefault();
    if (input.value.includes(',')) {
      const inputed = getCoords(input.value);
      if (inputed === false) {
        alert('Проверьте правильность ввода');
      } else {
        modal.classList.remove('active');
        createMessage(messageTime, message, inputed);
        // input.value = '';
      }
    } else {
      alert('Проверьте правильность ввода');
    }
  });
  console.log('5');
  cancel.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}
