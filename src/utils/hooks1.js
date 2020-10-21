import { useEffect, useState } from 'react';
import { URL } from '../config';
import { CustomSocket1 } from './customSocket1';

export const useHookWithWebsocket = (initValue, channel) => {
  const [value, setValue] = useState(initValue);
  const connection = CustomSocket1.getInstance();
  const setMessage = (value) => connection.sendMessage(channel, value);

  useEffect(() => {
    connection.initilize(URL);
    console.log('init', connection);


    return () => {
      connection.ws.close();
      console.log('close', connection);
    }
  }, []);

  useEffect(() => {
    connection.addListener(channel, setValue);
  }, [channel])

  return [value, setMessage];
};

