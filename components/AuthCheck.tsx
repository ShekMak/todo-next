import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react'
import AuthContext from '../store/auth.context'

function AuthCheck({children}: any) {
    const {user, loading} = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if(user === null) {
          router.push('/');
      }
    }, [user])

    // redirecting user who is not connectred
    return user && !loading ? children : <div />;
}

export default AuthCheck