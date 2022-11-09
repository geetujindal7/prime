import Head from "next/head";
import { useEffect, useState } from "react";
import AppContext, { AppProvider } from "../src/Context/ApiContext";
import { AuthUserProvider } from "../src/Context/AuthUserContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const [data, setdata] = useState()
  
  return (
    <AuthUserProvider>
    <AppProvider>
      <Component {...pageProps} />
      </AppProvider>
    </AuthUserProvider>
  );
}

export default MyApp;
