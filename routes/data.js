
let messages = [];

function addMessage(username, message) {
  messages.push({ username, message });
}

function getMessages() {
  return messages;
}

module.exports = {
  addMessage,
  getMessages,
};
