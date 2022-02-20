import { NextPage } from 'next';
import React from 'react';
import AuthCheck from '../../components/AuthCheck';
import Todos from '../../components/Todos';

const IndexTodo: NextPage = () => {
  return (
    <AuthCheck>
      <Todos/>
    </AuthCheck>
  );
}

export default IndexTodo;
