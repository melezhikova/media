export default class Message {
  constructor(time, text, coords) {
    this.time = time;
    this.text = text;
    this.coords = coords;
  }

  addMessageToDOM() {
    const box = document.querySelector('.messagesBox');

    const msg = document.createElement('div');
    msg.classList.add('msg');

    const msgTime = document.createElement('div');
    msgTime.classList.add('msgTime');
    msgTime.textContent = this.time;

    const msgBody = document.createElement('div');
    msgBody.classList.add('msgBody');
    msgBody.textContent = this.text;

    const msgCoords = document.createElement('div');
    msgCoords.classList.add('msgCoords');
    msgCoords.textContent = this.coords;

    msg.appendChild(msgTime);
    msg.appendChild(msgBody);
    msg.appendChild(msgCoords);
    box.appendChild(msg);
  }
}
