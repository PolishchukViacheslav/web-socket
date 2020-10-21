import React, { useEffect, useState } from 'react';
import { URL } from '../config';
import { customSocket } from './customSocket';

export const useHookWithWebsocket = (initValue, channel) => {
  let [socket, setSocket] = useState();
  const [value, setValue] = useState(initValue);
  const setMessage = (value) => socket.sendMessage(channel, value);
  useEffect(() => {
    socket = new customSocket();
    socket.initilize(URL);
    setSocket(socket)
    return () => {
      socket.ws.close()
    }
  }, []);

  useEffect(() => {
    socket && socket.addListener(channel, setValue);
  }, [channel])

  return [value, setMessage];
};

