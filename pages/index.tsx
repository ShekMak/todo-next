import type { NextPage } from 'next'
import AuthCheck from '../components/AuthCheck';
import Login from '../components/Login';

const Home: NextPage = () => {

  return (
      <AuthCheck>
        <Login />
      </AuthCheck>
  )
}

export default Home
