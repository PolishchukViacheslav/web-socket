import React, { useEffect, useState } from 'react';
import { URL } from '../config';
import { customSocket } from './customSocket';

export const useHookWithWebsocket = (initValue, channel) => {
  debugger;
  let [socket, setSocket] = useState();
  const [value, setValue] = useState(initValue);
  const setMessage = (value) => socket.sendMessage(channel, value);
  useEffect(() => {
    debugger;
    socket = new customSocket();
    socket.initilize(URL);
    setSocket(socket)
    return () => {
      socket.ws.close()
    }
  }, []);

  useEffect(() => {
    debugger;
    socket && socket.addListener(channel, setValue);
  }, [channel])

  return [value, setMessage];
};

