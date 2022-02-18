import { NextPage } from 'next';
import React from 'react'
import AuthCheck from '../../components/AuthCheck';
import NewTodo from '../../components/NewTodo';

const Newtask: NextPage = () => {
  return (
    <AuthCheck>
      <NewTodo />
    </AuthCheck>
  );
}

export default Newtask;