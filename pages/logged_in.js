import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useAuth } from '../src/Context/AuthUserContext';


const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading])

  return (
    <button onClick={signOut}>Sign Out </button>
  )
}

export default LoggedIn;