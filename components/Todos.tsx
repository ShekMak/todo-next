import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { logOut } from '../firebase/authentification';
import { getMoreTasks, getTasks } from '../firebase/task.firestore';
import useOnScreen from '../hooks/useOnScreen';
import Task from '../models/Task';
import AuthContext from '../store/auth.context';
import EmptyTodo from './EmptyTodo';
import Loading from './Loading';
import Todo from './Todo';

const TAB_DONE = {
  title: 'Done',
  message: 'It seems you have no task done, finish one and change the world.'
}

const TAB_IN_PROGRESS = {
  title: 'In Progress',
  message: 'It seems you have no task, create one and change the world.'
}

const LIMIT_DATA_PER_REQUEST = 10;

function Todos() {

  const activeStyle = 'relative before:border-b-4 before:absolute before:inset-0 before:h-full before:pt-7 before:border-black';
  const [tab, setTab] = useState<{title: string, message: string}>(TAB_IN_PROGRESS);
  const [todos, setTodos] = useState<Task[]>([]);
  const [todosLoading, setTodosLoading] = useState(true);
  const [endOfTask, setEndOfTask] = useState(false);
  const currentDate = new Date();

  //Getting User Connected from AuthContext
  const {user} = useContext(AuthContext);

  // Ref & Custom Hook
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible] = useOnScreen(ref);

  // Next Router
  const router = useRouter();

  useEffect(() => {
    if(user) {
      getTasks(false, user.uid).then(
        tasks => {
          setTodos(tasks);
          setTodosLoading(false);
          if(tasks.length < LIMIT_DATA_PER_REQUEST) {
            setEndOfTask(true);
          }
        }
      ).catch(error => {
        toast(error.message, {
          icon: '⛔️'
        })
        setTodos([]);
        setTodosLoading(false);
      })
    }
  }, [user]);

  // Get More tasks when the last child is visible
  useEffect(() => {
    if(isVisible === true && !endOfTask && todos.length > 0) {
      //TODO: Put the logic a adding tasks
      if(tab.title === TAB_IN_PROGRESS.title) {
        getMoreTasks(todos[todos.length -1].id, false, user.uid).then(
          tasks => {
            if(tasks.length < LIMIT_DATA_PER_REQUEST) {
              setEndOfTask(true);
            }
            setTodos([
              ...todos,
              ...tasks
            ])
          }
        );
      }else {
        getMoreTasks(todos[todos.length -1].id, true, user.uid).then(
          tasks => {
            if(tasks.length < LIMIT_DATA_PER_REQUEST) {
              setEndOfTask(true);
            }
            setTodos([
              ...todos,
              ...tasks
            ])
          }
        );
      }
    }
  }, [isVisible]);

  function tasks(state = false) {
    setTodosLoading(true);
    getTasks(state, user.uid).then(
      tasks => {
        setTodos(tasks)
        setTodosLoading(false)
      }
    ).catch(
      error => {
        setTodos([])
        toast(error.message, {
          icon: '⛔️'
        })
      }
    )
  }

  function changeTab(value: string) {
    setEndOfTask(false);
    if(value === 'Done') {
      tasks(true);
      setTab(TAB_DONE);
    }else {
      tasks(false);
      setTab(TAB_IN_PROGRESS);
    }
  }

  const Logout = () => {
    logOut().then(
      () => router.push('/')
    )
  }

  return (
    <div className='flex flex-col h-full md:w-1/2 md:m-auto p-4'>
      <i className='bi bi-arrow-up-right-square-fill self-end text-2xl cursor-pointer'
        onClick={Logout}
      ></i>
      <p className='font-normal text-4xl px-6 pt-2 flex justify-center items-center'>
        <span>todos</span>
      </p>
      <div className='flex justify-between mt-3 mx-6 py-2 border-b cursor-pointer'>
        <p className={ tab.title === TAB_IN_PROGRESS.title ? `mr-10 px-4 ${activeStyle}` : 'mr-10 px-4'}
          onClick={ () => changeTab(TAB_IN_PROGRESS.title)}
        >
          {TAB_IN_PROGRESS.title}
        </p>
        <p className={ tab.title === TAB_DONE.title ? `px-4 ${activeStyle}` : 'px-4' }
          onClick={ () => changeTab(TAB_DONE.title)}
        >
          {TAB_DONE.title}
        </p>
      </div>
      <div className='flex flex-col h-full overflow-scroll' id='todos'>
        {(todos.length > 0 && todosLoading === false) && 
          <div ref={ref} className="px-6 pt-3">
            {
              todos.map(
                todo => <Todo key={todo.id} todo={todo} currentDate={currentDate}/>
              )
            }
            <Link href="/todo/new-task">
              <a className='h-12 w-full flex items-center justify-center bg-black text-white rounded-md'>
                <i className='bi bi-plus-lg mr-2'></i>
                <span className='capitalize'>Add new task</span>
              </a>
            </Link>
          </div>
        }
        {(todos.length === 0 && todosLoading === false) && <EmptyTodo tab={tab} />}
        {todosLoading === true && <Loading/>}
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

export default Todos;
