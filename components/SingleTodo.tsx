import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getTask, UpdateTask } from '../firebase/task.firestore';
import Loading from './Loading';

function SingleTodo() {

  const router = useRouter();
  const {todoId} = router.query;
  const [todo, setTodo] = useState<any>(null)

  useEffect(() => {
    if(todoId && typeof todoId === 'string'){
      getTask(todoId).then(
        (task) => setTodo(task) 
      ).catch(error => 
        toast(error.message, {
          icon: '⛔️'
        }))
    }
  }, [])

  function MarkTaskDone() {
    if(todo) {
      UpdateTask({
        ...todo,
        updatedAt: new Date(),
        complete: true
      }).then(
        () => {
          setTodo({
            ...todo,
            complete: true
          })
          toast.success('Marked Done', {
            icon: '✅'
          })
        }
      ).catch(
        error => {
          toast(error.message, {
            icon: '⛔️'
          });
        }
      );
    }
  }

  if(todo === null) {
    return <Loading/>
  }

  return (
    <div className='h-full border py-8 px-8 md:w-1/2 md:m-auto'>
      <Link href={`/todo`}>
        <a className='py-3 px-5 border rounded-md my-5'> <i className='bi bi-chevron-left mr-1'></i><span>Back</span> </a>
      </Link>
      <div className='flex flex-col mt-10'>
        <h3 className='text-2xl font-semibold mb-4 max-w-full truncate'>{todo.title}</h3>
        <p className='truncate max-w-full'>{todo.description}</p>
        <p className='mt-4'>Due At: {new Date(todo.dueAt).toISOString()}</p>
        {!todo.complete && <button onClick={MarkTaskDone} className='mt-6 py-3 bg-black text-white rounded-md'>Done</button>}
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          duration: 5000
        }}
      />
    </div>
  );
}

export default SingleTodo;
