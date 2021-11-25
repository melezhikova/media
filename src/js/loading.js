import createMessage from './createMessage';

export default function load() {
  let savedMsgs;

  try {
    savedMsgs = JSON.parse(localStorage.getItem('messages'));
    if (savedMsgs.messages) {
      savedMsgs.messages.forEach((item) => {
        createMessage(item.time, item.text, item.coords);
      });
    }
  } catch (e) {
    console.log('Invalid savedMsgs', e);
  }
}
