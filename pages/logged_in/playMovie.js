import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";

function playMovie(props) {
  const router = useRouter();
  const query = router.query;
  console.log(query.id);
  console.log(query);
  const handleClose = () => {
    router.push("./");
  };

  const [result, setResult] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://imdb-api.com/en/API/Trailer/${process.env.NEXT_PUBLIC_RAPID_API_HOST}/${query.id}`
      );
      const data = await res.json();
      //const results = data.items;
      setResult(data.linkEmbed);
    }
    fetchData();
  }, []);

  console.log(result);
  return (
    <>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
          margin: "50px",
        }}
      >
        <img
          style={{
            width: "20px",
            height: "20px",
          }}
          onClick={handleClose}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1024px-Grey_close_x.svg.png"
          alt="test"
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
        }}
      >
        {query.linkEmbed || result ? (
          <iframe
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
              alignItems: "center",
            }}
            src={query.linkEmbed ? query.linkEmbed : result}
            width="854"
            allow="autoplay"
            height="480"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            frameBorder="no"
            scrolling="no"
            marginwidth="50"
          ></iframe>
        ) : (
          <iframe
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            width="1400"
            height="700"
            src={`https://www.youtube.com/embed/${query?.videoId}?modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1&mute=1&start=33&end=40&loop=1&playlist=${query?.videoId}`}
            frameborder="0"
            allowfullscreen
          ></iframe>
        )}
      </div>
    </>
  );
}

export default playMovie;
