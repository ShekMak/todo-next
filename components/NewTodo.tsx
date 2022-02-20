import Link from 'next/link';
import React, { FormEvent, useContext, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { addTask } from '../firebase/task.firestore';
import Task from '../models/Task';
import AuthContext from '../store/auth.context';

function NewTodo() {

  const {user} = useContext(AuthContext);
  let titleRef = useRef(null);
  let descriptionRef = useRef(null);
  let dueOnRef = useRef(null);
  const minDate = new Date().getFullYear() + '-' + (`0${new Date().getMonth() + 1}`.slice(-2)) + '-' + (`0${(new Date().getDate())}`.slice(-2));

  function newTask(event: FormEvent) {
    event.preventDefault()

    const task : Task = {
      //@ts-ignore
      title: titleRef?.current?.value,
      //@ts-ignore
      description: descriptionRef?.current?.value,
      complete: false,
      createdAt: new Date(),
      updatedAt: null,
      //@ts-ignore
      dueAt: new Date(dueOnRef?.current?.value),
      uidUser: user.uid,
    }

    if(task.title.length >= 5 && task.description.length >= 5) {
        addTask(task).then(
          () => {
            toast.success('Task Added', {
              icon: '✅'
            })
            //@ts-ignore
            titleRef?.current?.value = '';
            //@ts-ignore
            descriptionRef?.current?.value = '';
            //@ts-ignore
            dueOnRef?.current?.value = '';
          }
        )
    }else {
      toast('An error occured in the form', {
        icon: '⛔️'
      })
    }
   
  }

  return (
    <div className='flex flex-col px-6 py-4 md:w-1/2 md:m-auto'>
      <h3 className='mb-4 text-2xl font-semibold'>
        New Task
      </h3>
      <form className='flex flex-col' onSubmit={newTask}>
        <label className='mb-2 text-[#383c43]' htmlFor="title">Title</label>
        <input ref={titleRef} minLength={5} required={true} className='border border-[#404647] px-3 mb-4 h-12 outline-none' placeholder='Mention the title of your task.' type="text" name="title" id="title" />
        <label className='mb-2 text-[#383c43]' htmlFor="description">Description</label>
        <textarea ref={descriptionRef} minLength={5} required={true} className='border border-[#404647] p-3 outline-none border-3 resize-none mb-4' name="description" id="description" cols={25} rows={10} placeholder="Describe your task here, it's useful !">
        </textarea>
        <div className='flex'>
          <label htmlFor='dueOn' className='mr-3'>Due On</label>
          <input ref={dueOnRef} min={minDate} required={true} type="date" name="due" id="dueOn" className='border border-[#404647] px-3 mb-4 h-12 outline-none w-full' />
        </div>
        <button type={'submit'} className='py-3 bg-black text-white rounded-md mb-4'>Save</button>
      </form>
      <Link href={'/todo'}>
        <a  className='py-3 border rounded-md text-center'>
          Cancel
        </a>
      </Link>
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          duration: 5000
        }}
      />
    </div>
  )
}

export default NewTodo;
