import type { NextPage } from 'next'
import Login from '../components/Login';
import NoAuthCheck from '../components/NoAuthCheck';

const Home: NextPage = () => {

  return (
      <NoAuthCheck>
        <Login />
      </NoAuthCheck>
  )
}

export default Home
