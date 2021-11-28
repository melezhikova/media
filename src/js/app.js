// TODO: write your code here
import getTime from './time';
import { getLocation } from './location';
import load from './loading';
import createMessage from './createMessage';

// localStorage.removeItem('messages');
const form = document.querySelector('#form');
const input = document.querySelector('.messageInput');

load();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { value } = input;
  const time = getTime();
  let coords = null;
  if (navigator.geolocation) {
    const locationCoords = () => new Promise(((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          resolve(position);
        }, (error) => {
          console.log(error);
          reject(getLocation(time, value));
          console.log('1');
        },
      );
    }));

    locationCoords().then((position) => {
      coords = `[${position.coords.latitude}, -${position.coords.longitude}]`;
      createMessage(time, value, coords);
    });
  } else {
    console.log('2');
    getLocation(time, value);
  }
});
