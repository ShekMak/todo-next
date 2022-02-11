import Link from 'next/link';
import React from 'react';

function SingleTodo() {
  const todo: any = {
    complete: false,
    id: 'uid-todo'
  }

  return (
    <div className='h-full py-8 px-8 md:w-1/2 md:m-auto'>
      <Link href={`/todo`}>
        <a className='py-3 px-5 border rounded-md my-5'> <i className='bi bi-chevron-left mr-1'></i><span>Back</span> </a>
      </Link>
      <div className='flex flex-col mt-10'>
        <h3 className='text-2xl font-semibold mb-4'>Todo Title</h3>
        <p>Todo Description</p>
        <button className='mt-6 py-3 bg-black text-white rounded-md'>Done</button>
      </div>
    </div>
  );
}

export default SingleTodo;
