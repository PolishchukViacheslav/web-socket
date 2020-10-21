import React from 'react';
import { useHookWithWebsocket } from '../utils/hooks1';

export const Room2 = () => {
  const [visible, setVisible] = useHookWithWebsocket(false, 'channel1');

  return (
    <div>
      <span>{visible ? 'true' : 'false'}</span>
      <button type="button" onClick={() => setVisible(!visible)}>send</button>
    </div>
  );
};
