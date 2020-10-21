export class CustomSocket {
  initilize(url) {
    this.ws = new WebSocket(url);
  }

  addListener(channel, method) {
    this.ws.addEventListener('message', (event) => {
      const eventData = JSON.parse(event.data);
      if (eventData.channel === channel) {
        method(eventData.message);
      }
    });
  }

  sendMessage(channel, message) {
    this.ws.send(JSON.stringify(
      {
        channel,
        message,
      },
    ));
  }
}
