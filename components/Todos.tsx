import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import EmptyTodo from './EmptyTodo';
import Todo from './Todo';

function Todos() {
  const [todos, setTodos] = useState<string[]>([]);
  const todo: any = {
    complete: false,
    id: 'uid-todo'
  }

  useEffect(() => {
    console.log(todos)
  },[]);
  return (
    <div className='flex flex-col h-full p-4'>
      <p className='font-normal text-4xl px-6 pt-2 mb-2 flex'>
        <span>Home</span>
      </p>
      <div className='flex flex-col h-full overflow-scroll'>
        {(todos.length === 0) && 
        <div className="px-6 pt-6">
          <Todo todo={todo}/>
          <Todo todo={todo}/>
          <Todo todo={{...todo, complete: true}}/>
          <Todo todo={todo}/>
          <Todo todo={todo}/>
          <Todo todo={todo}/>
          <Todo todo={{...todo, complete: true}}/>
          <Todo todo={{...todo, complete: true}}/>
          <Todo todo={todo}/>
          <Todo todo={todo}/>
          <Todo todo={todo}/>
          <Todo todo={todo}/>
          <Todo todo={todo}/>
          <Todo todo={todo}/>
          <Link href="/todo/new-task">
            <a className='h-12 w-full flex items-center justify-center bg-black text-white rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
              <span className='capitalize'>Add new task</span>
            </a>
          </Link>
        </div>}
        {(todos.length > 0) && <EmptyTodo/>}
      </div>
    </div>
  );
}

export default Todos;
