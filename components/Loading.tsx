import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

function Loading() {

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <Player 
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_3gl6z75q.json"
        style={{ height: '300px', width: '300px' }}
        ></Player>
    </div>
  )
}

export default Loading