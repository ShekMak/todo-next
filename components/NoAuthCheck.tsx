import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react'
import AuthContext from '../store/auth.context'
import Loading from './Loading';

function NoAuthCheck({children}: any) {
    const {user, loading} = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if(user) {
        router.push('/todo');
      }
    }, [user])

    // redirecting user who is already connected
    return !user && !loading ? children : <Loading/>;
}

export default NoAuthCheck