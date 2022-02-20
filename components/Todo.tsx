import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Task from '../models/Task';

type IProps = {
  todo: Task,
  currentDate: Date
}

function Todo({todo, currentDate}: IProps) {

  const todoStyle = 'border rounded-md shadow-sm py-4 px-4 mb-4 last:mb-0 flex items-center';
  const [overdue, setOverdue] = useState('');

  useEffect(() => {
    const todoDate = todo.dueAt.getTime();
    
    if(currentDate.getTime() >= todoDate){
      setOverdue(' border-red-500');
    }
  }, []);

  return (
    <p className={ todo.complete ? `${todoStyle} bg-[#BAC1C9]` : todoStyle.concat(overdue)}>
      <span className='mx-2 truncate w-11/12'>
          {todo.title}
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
