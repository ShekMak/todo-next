import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import React from 'react';

function EmptyTodo() {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <Player 
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_gctatsbh.json"
        style={{ height: '300px', width: '300px' }}
        ></Player>
      <p className='align-middle text-center mt-4 mb-6 px-6'>It seems you have no task, create one and change the world.</p>
      <Link href="/todo/new-task">
        <a className='h-12 w-52 flex items-center justify-center bg-black text-white rounded-md'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
          <span className='capitalize'>Add new task</span>
        </a>
      </Link>
    </div>
  );
}

export default EmptyTodo;
