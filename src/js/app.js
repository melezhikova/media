// TODO: write your code here
import getTime from './time';
import load from './loading';
import getCoords from './coords';
import createMessage from './createMessage';

// localStorage.removeItem('messages');
const form = document.querySelector('#form');
const modal = document.querySelector('.modal');
const inputMessage = document.querySelector('.messageInput');
const inputModal = document.querySelector('.location');

load();

function getLocation() {
  modal.classList.add('active');
  inputModal.focus();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { value } = inputMessage;
  const time = getTime();
  let coords = null;
  if (navigator.geolocation) {
    const locationCoords = () => new Promise(((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        }, (error) => {
          console.log(error);
          reject(getLocation());
        },
      );
    }));

    locationCoords().then((position) => {
      coords = `[${position.coords.latitude}, -${position.coords.longitude}]`;
      createMessage(time, value, coords);
    });
  } else {
    getLocation(time, value);
  }
});

const locationForm = document.querySelector('.locationForm');
locationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const time = getTime();
  const { value } = inputMessage;
  if (inputModal.value.includes(',')) {
    const inputed = getCoords(inputModal.value);
    if (inputed === false) {
      alert('Проверьте правильность ввода');
    } else {
      modal.classList.remove('active');
      createMessage(time, value, inputed);
      inputModal.value = '';
    }
  } else {
    alert('Проверьте правильность ввода');
  }
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', () => {
  modal.classList.remove('active');
});
