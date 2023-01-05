import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/MouseHover.module.css";
import Router, { withRouter } from "next/router";
import { AppContext } from "../Context/ApiContext";

function MouseHover({ id, handleItem, element, handleRemove }) {

  const [svg, setsvg] = useState("")
  const context = useContext(AppContext);

  const [data, setData] = useState({
    // imDbId: "tt21084334",
    // title: "I Heard the Bells",
    // fullTitle: "I Heard the Bells (2022)",
    // type: "Movie",
    // year: "2022",
    // videoId: "-rwloAZVDRY",
    // videoUrl: "https://www.youtube.com/watch?v=-rwloAZVDRY",
    // errorMessage: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    Router.push({
      pathname: "logged_in/playMovie",
      query: data,
    });
  };

  const handlewish = (data) => {
    context.HandleWishlist(data);
  };
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://imdb-api.com/en/API/YouTubeTrailer/${process.env.NEXT_PUBLIC_RAPID_API_HOST}/${id}`
      );
      const data = await res.json();
      console.log(data);
      //const results = data.items;
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.HoverContainer}>
        {data?.linkEmbed !== null ? (
          <iframe
            src={`https://www.youtube.com/embed/${data?.videoId}?modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1&mute=0&start=33&end=40&loop=1&playlist=${data?.videoId}`}
            allow="autoplay"
            width="340"
            height="200"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            frameBorder="no"
            scrolling="no"
          ></iframe>
        ) : (
          <div>
            <img
              style={{ width: "350px", height: "200px" }}
              src={data?.thumbnailUrl}
              alt="test"
            />
          </div>
        )}
        <div className={styles.PlayContainer}>
          <img
            onClick={() => handleClick()}
            className={styles.playImage}
            src="https://www.freepnglogos.com/uploads/play-button-png/index-media-cover-art-play-button-overlay-5.png"
            alt="test"
          />
          <div className={styles.Play_progress}>
            <label htmlFor="file" style={{ color: "white" }}>
              Play
            </label>
            <progress
              id="file"
              value={Math.floor(Math.random() * 100)}
              max="100"
            ></progress>
          </div>

          <button
            onClick={() => handlewish(data)}
            style={{
              backgroundColor: "transparent",
              width: "30px",
              height: "27px",
              borderRadius: "50%",
              border: "none",
            }}
          >
            <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
              <title>Add</title>
              <path
                d="M3 12h18m-9 9V3"
                stroke="white"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>

          <svg
            onClick={() => handleRemove(element)}
            style={{ marginTop: "4px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            height="20px"
            width="20px"
            class="_2Z_ZKn"
          >
            <defs></defs>
            <path
              fill="white"
              fill-rule="evenodd"
              d="M12,20 C10.152,20 8.455,19.367 7.1,18.314 L18.314,7.1 C19.367,8.455 20,10.152 20,12 C20,16.418 16.418,20 12,20 M4,12 C4,7.582 7.582,4 12,4 C13.848,4 15.545,4.633 16.9,5.686 L5.686,16.9 C4.633,15.545 4,13.848 4,12 M12,2 C6.477,2 2,6.477 2,12 C2,17.523 6.477,22 12,22 C17.523,22 22,17.523 22,12 C22,6.477 17.523,2 12,2"
              transform="translate(-2 -2)"
            ></path>{" "}
            <title>Remove</title>
          </svg>
            
        </div>
        <div onClick={() => handleItem(element)}>
          <div
            style={{ color: "#00a8e1", margin: "10px 20px", fontSize: "16px" }}
          >
            Included with Prime
          </div>

          <div className={styles.Title_style}>{data?.fullTitle}</div>
          <div className={styles.videoDesc_style}>{data?.videoDescription}</div>
          <div className={styles.year_styles}>
            <div>{data?.year}</div>
            <div className={styles.Ua}>U/A 16+</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MouseHover;
