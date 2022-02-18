import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/authentification';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext({
  user: null,
  loading: true
})

export function AuthContextProvider({children}: any) {

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let unsubscribe;

    unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [user]);

  return (
    <AuthContext.Provider value={{user, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;