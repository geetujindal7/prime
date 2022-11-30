import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/MouseHover.module.css";
import Router, { withRouter } from 'next/router'
import { AppContext } from "../Context/ApiContext";


function MouseHover({ id }) {
  const context = useContext(AppContext)

  const [data, setData] = useState(
      {
    imDbId: "tt4273800",
    title: "The Good Nurse",
    fullTitle: "The Good Nurse (2022)",
    type: "Movie",
    year: "2022",
    videoId: "vi3998335513",
    videoTitle: "Official Trailer",
    videoDescription:
      "Amy, a compassionate nurse and single mother struggling with a life-threatening heart condition, is stretched to her physical and emotional limits by the hard and demanding night shifts at the ICU. But help arrives, when Charlie, a thoughtful and empathetic fellow nurse, starts at her unit. While sharing long nights at the hospital, the two develop a strong and devoted friendship, and for the first time in years, Amy truly has faith in her and her young daughters' future. But after a series of mysterious patient deaths sets off an investigation that points to Charlie as the prime suspect, Amy is forced to risk her life and the safety of her children to uncover the truth.",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BYzYyZGMwMzEtNDI0Zi00OGI3LWIwN2MtOGI1Y2NjYjllODFmXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
    uploadDate: "09/07/2022 17:26:57",
    link: "https://www.imdb.com/video/vi3998335513",
    linkEmbed: "https://www.imdb.com/video/imdb/vi3998335513/imdb/embed",
    errorMessage: "",
  }
  );

  const handleClick = (e) => {
    e.preventDefault();
    Router.push({
        pathname: 'logged_in/playMovie',
        query: data,
    });
  }

  const handlewish = (data) => {
    context.HandleWishlist(data)
  }
//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch(
//         `https://imdb-api.com/en/API/Trailer/${process.env.NEXT_PUBLIC_RAPID_API_HOST}/${id}`
//       );
//       const data = await res.json();
//       console.log(data);
//       //const results = data.items;
//       setData(data);
//     }
//     fetchData();
//   }, []);

  return (
    <>
      <div
        className={
         styles.HoverContainer 
        }
      >
        {data?.linkEmbed !== null ? (
          <iframe
            src={`${data?.linkEmbed}?autoplay=1&width=300`}
            //allow='autoplay'
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
          onClick={handleClick}
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
          <img
            title="Watch Trailer"
            className={styles.play_icon_style}
            src="https://www.svgrepo.com/show/209278/play-button.svg"
            alt="test"
          />
          <img
            onClick={() => handlewish(data)}
            title="Add to Wishlist"
            className={styles.play_icon_style}
            src="https://www.freeiconspng.com/thumbs/plus-icon/grey-plus-icon-8.png"
            alt="test"
          />
        </div>
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
    </>
  );
}

export default MouseHover;
