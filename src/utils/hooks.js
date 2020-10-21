import { useEffect, useState } from 'react';
import { URL } from '../config';
import { CustomSocket } from './customSocket';

export const useHookWithWebsocket = (initValue, channel) => {
  // eslint-disable-next-line prefer-const
  let [socket, setSocket] = useState();
  const [value, setValue] = useState(initValue);
  const setMessage = (data) => socket.sendMessage(channel, data);

  useEffect(() => {
    socket = new CustomSocket();
    socket.initilize(URL);
    setSocket(socket);

    return () => {
      socket.ws.close();
    };
  });

  useEffect(() => {
    if (socket) {
      socket.addListener(channel, setValue);
    }
  }, [channel]);

  return [value, setMessage];
};
