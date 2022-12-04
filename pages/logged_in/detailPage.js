import  Router,{useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../../src/Components/Header/Header";
import styles from "../../styles/product.module.css";

function detailPage() {
  const router = useRouter();
  const query = router.query;

  const [state, setstate] = useState(
      {
    imDbId: "tt21084334",
    title: "I Heard the Bells",
    fullTitle: "I Heard the Bells (2022)",
    type: "Movie",
    year: "2022",
    videoId: "-rwloAZVDRY",
    videoUrl: "https://www.youtube.com/watch?v=-rwloAZVDRY",
    errorMessage: "",
  }
  );


    //  useEffect(() => {
    //     async function fetchData() {
    //       const res = await fetch(
    //           `https://imdb-api.com/en/API/YouTubeTrailer/${process.env.NEXT_PUBLIC_RAPID_API_HOST}/${query.id}`
    //       );
    //       const data = await res.json();
    //       //const results = data.items;
    //       setstate(data);
    //     }
    //     fetchData();
    //   }, []);

  const handlePlay = (e) => {
    Router.push({
        pathname: "../logged_in/playMovie",
        query: state,
      });
  }
  return (
    <>
      <Header />

      <div style={{ position: "relative" }}>
        <div>
          <div
            style={{
              color: "#fff",
              zIndex: "3",
              position: "absolute",
              top: "0",
              marginLeft: "50px",
              marginTop: "110px",
            }}
          >
            <h1 style={{ marginBottom: "30px", fontSize: "32px" }}>
              {query.fullTitle}
            </h1>
            <p style={{ fontSize: "22px", marginBottom: "180px" }}>
              {query.year}
            </p>
            <div style={{ marginBottom: "30px" }}>
              <dl className={styles.dl}>
                <dt className={styles.dt}>Directors</dt>
                <dd className={styles.dt}>{query.directors}</dd>
              </dl>
              <dl className={styles.dl}>
                <dt className={styles.dt}>Starring</dt>
                <dd className={styles.dd}>{query.stars}</dd>
              </dl>
              <dl className={styles.dl}>
                <dt className={styles.dt}>Genres</dt>
                <dd className={styles.dd}>{query.genres}</dd>
              </dl>
              <dl className={styles.dl}>
                <dt className={styles.dt}>Subtitles</dt>
                <dd style={{ color: "#8197a4" }} className={styles.dd}>
                  English
                </dd>
              </dl>
              <dl className={styles.dl}>
                <dt className={styles.dt}>Audio languages</dt>
                <dd style={{ color: "#8197a4" }} className={styles.dd}>
                  English
                </dd>
              </dl>
            </div>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  width: "118px",
                  height: "68px",
                  marginRight: "30px",
                  backgroundColor: "#0f79af",
                  color: "#fff",
                  borderRadius: "5px",
                  fontSize: "20px",
                  border: "0",
                }}
                onClick={() => handlePlay(query.id)}
              >
                Play
              </button>
              <button
                style={{
                  width: "152px",
                  height: "68px",
                  backgroundColor: "#425265",
                  color: "#fff",
                  borderRadius: "5px",
                  fontSize: "16px",
                  border: "0",
                }}
              >
                More purchase options
              </button>
            </div>
          </div>
          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <iframe
              style={{
                zIndex: "1",
                position: "absolute",
                top: "0",
                justifyContent: "flex-end",
                display: "flex",
                opacity: "0.4",
                border: "none",
                borderWidth: "0",
              }}
              width="1100"
              height="600"
              src={`https://www.youtube.com/embed/${state?.videoId}?modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1&mute=1&start=33&end=40&loop=1&playlist=${state?.videoId}`}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
        <div style={{display: "flex", marginTop: "45%", color: "#fff", fontSize: "24px", justifyContent: "center"}}>
            <div style={{marginRight: "20px"}}>
                Related
            </div>
            <div>
                Details
            </div>
        </div>
    </>
  );
}

export default detailPage;
