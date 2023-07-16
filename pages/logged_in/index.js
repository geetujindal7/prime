import Head from "next/head";
import React, { useContext, useEffect } from "react";
import { useAuth } from "../../src/Context/AuthUserContext";
import Header from "../../src/Components/Header/Header";
import styles from "../../styles/main.module.css";
import { AppContext } from "../../src/Context/ApiContext";
import SlideBar from "../../src/Components/Common/SlideBar";
import Elements from "../../src/Components/Recommanded";
import SignOut from "../../src/Components/Common/SignOut";
import Categories from "../../src/Components/Common/categories";
import Page from "../../src/Components/CategoryLoggedItem";
import { useRouter } from "next/router";

const LoggedIn = ({}) => {
  const {ShowProfileDetails, HandleMember, ShowCategoriesDropdown} = useContext(AppContext);

  const { authUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(authUser === null)
    {
      router.push("/");
    }
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
        <Page />
      </div>
      {ShowProfileDetails ? <SignOut /> : undefined}
      {ShowCategoriesDropdown ? <Categories /> : undefined}
    </>
  );
};

export default LoggedIn;
