import React from 'react'
import { useHookWithWebsocket } from '../utils/hooks';

export const Room2 = () => {
  const [visible, setVisible] = useHookWithWebsocket(false, 'channel1');

  return (
    <div>
      <span>{visible ? 'true' : 'false'}</span>
      <button onClick={() => setVisible(!visible)}>send</button>
    </div>
  )
};
