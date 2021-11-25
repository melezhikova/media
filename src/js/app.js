// TODO: write your code here
import getTime from './time';
import { getLocation } from './location';
import load from './loading';
import createMessage from './createMessage';

// localStorage.removeItem('messages');
const form = document.querySelector('#form');
const input = document.querySelector('.messageInput');

load();

let latitude; let
  longitude;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    }, (error) => {
      console.log(error);
    },
  );
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { value } = input;
  const time = getTime();
  let coords = null;
  if (latitude && longitude) {
    coords = `[${latitude}, -${longitude}]`;
    createMessage(time, value, coords);
  } else {
    getLocation(time, value);
  }
});
