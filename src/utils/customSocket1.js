export class CustomSocket1 {
  static getInstance() {
    if (!CustomSocket1.instance) {
      CustomSocket1.instance = new CustomSocket1();
    }

    return CustomSocket1.instance;
  }

  initilize(url) {
    this.ws = new WebSocket(url);
    this.ws.onclose = function(event) {
      console.log('close', event);
    };
    
    this.ws.onerror = function(event) {
      console.log('error', event);
    }

  }


  addListener(channel, method) {
    this.ws.addEventListener('message', (event) => {
      const eventData = JSON.parse(event.data);
      if (eventData.channel === channel) {
        method(eventData.message)
      }
    })
  }

  sendMessage(channel, message) {
    this.ws.send(JSON.stringify(
      {
        channel,
        message
      }
    ))
  }
}

