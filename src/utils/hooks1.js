import { useEffect, useState } from 'react';
import { CustomSocket1 } from './customSocket1';

export const useHookWithWebsocket = (initValue, channel) => {
  const [value, setValue] = useState(initValue);
  const connection = CustomSocket1.getInstance();
  const setMessage = (data) => connection.sendMessage(channel, data);

  useEffect(() => {
    connection.addListener(channel, setValue);
  }, [channel, connection]);

  return [value, setMessage];
};
