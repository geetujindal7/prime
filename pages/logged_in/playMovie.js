import { useRouter } from "next/router";
import React from "react";

function playMovie(props) {
  const router = useRouter();
  const query = router.query;
  console.log(query.title);

  const handleClose = () => {
    router.push("./");
  };
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
          alt=""
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
        }}
      >
        <iframe
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
            alignItems: "center",
          }}
          src={query.linkEmbed}
          width="854"
          allow='autoplay'
          height="480"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          frameborder="no"
          scrolling="no"
          marginwidth="50"
        ></iframe>
      </div>
    </>
  );
}

export default playMovie;

