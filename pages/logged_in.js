import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { useAuth } from '../src/Context/AuthUserContext';
import Header from '../src/Components/Header/Header';
import styles from '../styles/main.module.css'
import { AppContext } from '../src/Context/ApiContext';



const LoggedIn = ({}) => {
    const context = useContext(AppContext)
    console.log(context)
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();
  console.log("auth", authUser)


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