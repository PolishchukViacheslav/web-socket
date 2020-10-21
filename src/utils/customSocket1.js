import { URL } from '../config';

let timerId;

export class CustomSocket1 {
  constructor() {
    this.initilize(URL);
  }

  static getInstance() {
    if (!CustomSocket1.instance) {
      CustomSocket1.instance = new CustomSocket1();
    }

    return CustomSocket1.instance;
  }

  static reConnection() {
    if (timerId) {
      return;
    }

    timerId = setTimeout(() => {
      console.log('reConnection');
      const connection = CustomSocket1.getInstance();
      connection.initilize(URL);
      timerId = undefined;
    }, 3000);
  }

  initilize(url) {
    this.ws = new WebSocket(url);
    this.ws.onclose = (event) => {
      if (!event.wasClean) {
        CustomSocket1.reConnection();
        console.log('notClean', event.wasClean);
      }
    };
    this.ws.onerror = CustomSocket1.reConnection;
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
