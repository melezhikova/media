const allMessages = [];

export default function save(message) {
  allMessages.push(message);
  localStorage.setItem('messages', JSON.stringify({ messages: allMessages }));
}
