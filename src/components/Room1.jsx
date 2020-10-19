import React from 'react'
import { useHookWithWebsocket } from '../utils/hooks'

export const Room1 = () => {
  const [visible, setVisible] = useHookWithWebsocket(false, 'channel'); //if data must be sync with room 2 --> channel value should be same

  return (
    <div>
      <span>{visible ? 'true' : 'false'}</span>
      <button onClick={() => setVisible(!visible)}>send</button>
    </div>
  )
}
