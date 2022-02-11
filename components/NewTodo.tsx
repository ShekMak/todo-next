import Link from 'next/link';
import React from 'react';

function NewTodo() {
  return (
    <div className='flex flex-col px-6 py-4 md:w-1/2 md:m-auto'>
      <h3 className='mb-4 text-2xl font-semibold'>
        New Task
      </h3>
      <label className='mb-2 text-[#383c43]' htmlFor="title">Title</label>
      <input className='border border-[#404647] px-3 mb-4 h-12 outline-none' placeholder='Mention the title of your task.' type="text" name="title" id="title" />
      <label className='mb-2 text-[#383c43]' htmlFor="description">Description</label>
      <textarea className='border border-[#404647] p-3 outline-none border-3 resize-none mb-4' name="description" id="description" cols={30} rows={10} placeholder="Describe your task here, it's useful !">
      </textarea>
      <button className='py-3 bg-black text-white rounded-md mb-4'>Save</button>
      <Link href={'/todo'}>
        <a  className='py-3 border rounded-md text-center'>
          Cancel
        </a>
      </Link>
    </div>
  )
}

export default NewTodo;
