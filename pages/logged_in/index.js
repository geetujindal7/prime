import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { useAuth } from '../../src/Context/AuthUserContext';
import Header from '../../src/Components/Header/Header';
import styles from '../../styles/main.module.css'
import { AppContext } from '../../src/Context/ApiContext';
import SlideBar from '../../src/Components/Common/SlideBar';
import Elements from '../../src/Components/Recommanded';



const LoggedIn = ({}) => {
    const context = useContext(AppContext)

  const { authUser } = useAuth();
  const router = useRouter();
  console.log("auth", authUser)

  useEffect(() => {
     context.HandlePageNo("Top250Movies")
  }, [context])
    
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
    <SlideBar />
    <Elements />
    </>
  )
}

export default LoggedIn;