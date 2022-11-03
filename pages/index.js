import Head from "next/head";

import Login from "../src/Components/Login";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Sign-In</title>
        <link
          rel="shortcut icon"
          href="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg"
        ></link>
      </Head>
      <main>
       <Login />
      </main>
    </div>
  );
}
