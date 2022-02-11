import Link from 'next/link';
import React, { useEffect } from 'react';

function Todo({todo}: any) {

  const todoStyle = 'border rounded-md shadow-sm py-4 px-4 mb-4 last:mb-0 flex items-center';
  const overdue = 'border-red'

  useEffect(() => {
  }, [todo]);

  return (
    <p className={ todo.complete ? `${todoStyle} bg-[#BAC1C9] ${overdue}` : todoStyle}>
      <span className='mx-2 truncate w-11/12'>
          TodoTodoTodoTodoTodoTodoTodoTodoTodoTodoTodoTodo
      </span>
      <Link href={`/todo/detail/${todo.id}`}>
        <a>
          <i className='bi bi-chevron-right'></i>
        </a>
      </Link>
    </p>
  );
}

export default Todo;
