import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function EmptyTodo({ tab }: any) {
  
  return (
    <div className='h-full flex flex-col justify-center items-center md:w-1/2 md:m-auto'>
      <Player 
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_gctatsbh.json"
        style={{ height: '300px', width: '300px' }}
        ></Player>
      <p className='align-middle text-center mt-4 mb-6 px-6'>{tab.message}</p>
      {
        tab.title === 'In Progress' && 
        <Link href="/todo/new-task">
          <a className='h-12 w-52 flex items-center justify-center bg-black text-white rounded-md'>
            <i className='bi bi-plus-lg mr-2'></i>
            <span className='capitalize'>Add new task</span>
          </a>
        </Link>
      }
    </div>
  );
}

export default EmptyTodo;
