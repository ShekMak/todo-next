import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import EmptyTodo from './EmptyTodo';
import Todo from './Todo';

function Todos() {
  const [todos, setTodos] = useState<string[]>([]);
  const activeStyle = 'relative before:border-b-4 before:absolute before:inset-0 before:h-full before:pt-7 before:border-black';
  const [tab, setTab] = useState<string>('In Progress');
  
  const todo: any = {
    complete: false,
    id: 'uid-todo'
  }

  useEffect(() => {
    console.log('Rafraichit');
  }, []);

  useEffect(() => {
    console.log(tab)
  },[tab]);

  return (
    <div className='flex flex-col h-full md:w-1/2 md:m-auto p-4'>
      <i className='bi bi-arrow-up-right-square-fill self-end text-2xl cursor-pointer'></i>
      <p className='font-normal text-4xl px-6 pt-2 flex justify-center items-center'>
        <span>todos</span>
      </p>
      <div className='flex justify-between mt-3 mx-6 py-2 border-b cursor-pointer'>
        <p className={ tab === 'In Progress' ? `mr-10 px-4 ${activeStyle}` : 'mr-10 px-4'}
          onClick={ () => setTab('In Progress')}
        >
          In progress
        </p>
        <p className={ tab === 'Done' ? `px-4 ${activeStyle}` : 'px-4' }
          onClick={ () => setTab('Done')}
        >
          Done
        </p>
      </div>
      <div className='flex flex-col h-full overflow-scroll'>
        {(todos.length > 0) && 
          <div className="px-6 pt-3">
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
                <i className='bi bi-plus-lg mr-2'></i>
                <span className='capitalize'>Add new task</span>
              </a>
            </Link>
          </div>
        }
        {(todos.length === 0) && <EmptyTodo/>}
      </div>
    </div>
  );
}

export default Todos;
