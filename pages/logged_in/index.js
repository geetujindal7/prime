import Head from "next/head";
import React, { useContext, useEffect } from "react";
import { useAuth } from "../../src/Context/AuthUserContext";
import Header from "../../src/Components/Header/Header";
import styles from "../../styles/main.module.css";
import { AppContext } from "../../src/Context/ApiContext";
import SlideBar from "../../src/Components/Common/SlideBar";
import Elements from "../../src/Components/Recommanded";
import SignOut from "../../src/Components/Common/SignOut";

const LoggedIn = ({}) => {
  const {ShowProfileDetails, HandleMember} = useContext(AppContext);

  const { authUser } = useAuth();

  useEffect(() => {
    HandleMember(authUser?.displayName);
  }, [authUser]);

  return (
    <>
      <Head>
        <title>Prime Video: Movies</title>
      </Head>
      <div className={ShowProfileDetails ? styles.headd : undefined}>
        <div className={styles.HeaderContainer}>
          <Header />
        </div>
        <SlideBar />
        <Elements />
      </div>
      {ShowProfileDetails ? <SignOut /> : undefined}
    </>
  );
};

export default LoggedIn;
