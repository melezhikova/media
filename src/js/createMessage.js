import Message from './Message';
import save from './saving';

export default function createMessage(time, value, coords) {
  const input = document.querySelector('.messageInput');
  const message = new Message(time, value, coords);
  message.addMessageToDOM(message);
  input.value = '';
  save(message);
}
