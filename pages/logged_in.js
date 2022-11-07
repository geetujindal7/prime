import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useAuth } from '../src/Context/AuthUserContext';
import Header from '../src/Components/Header/Header';
import styles from '../styles/main.module.css'



const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();
  console.log("auth", authUser)

  useEffect(() => {
    
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading])

  const handleSubmit = (e) => {
      e.preventDefault()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bc5b33704amsh5eff8f306d0200ep1fe8d1jsn3377938a8334',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };
    
    fetch('https://ott-details.p.rapidapi.com/advancedsearch', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  }

  return (
      <>
      <Head>
          <title>Prime Video: Movies</title>
      </Head>
    {/* <button onClick={signOut}>Sign Out </button> */}
    {/* <button onClick={handleSubmit}>Submit</button> */}
    <div className={styles.HeaderContainer}>
    <Header />
    </div>
   
    </>
  )
}

export default LoggedIn;