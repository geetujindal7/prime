/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "../../../styles/Slidebar.module.css";
import Router from "next/router";


const SlideBar = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({
    searchType: "Title",
    expression: "lost 2004",
    results: [
      {
        id: "tt0411008",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6800_AL_.jpg",
        title: "Lost",
        description: "(2004–2010)",
      },
      {
        id: "tt0423505",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BZDBlNGQ3YzQtNDBiOS00NzI3LTg3YmYtNmZlYjJjN2JkOWZjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6800_AL_.jpg",
        title: "Wake Up, Ron Burgundy",
        description: "(2004 Video)",
      },
      {
        id: "tt0777269",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTJlNTZiMDctZDhiMi00YTdhLTljMjItYjgxZjM1YzE3ZWFiXkEyXkFqcGdeQXVyNjc5ODUzODU@._V1_Ratio0.7200_AL_.jpg",
        title: "The Robinsons: Lost in Space",
        description: "(2004 TV Movie)",
      },
      {
        id: "tt0406942",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjE4NTA4NzQ4NF5BMl5BanBnXkFtZTcwMjIwOTEzMQ@@._V1_Ratio0.6800_AL_.jpg",
        title: "Lost",
        description: "(I) (2004)",
      },
      {
        id: "tt0433537",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWFkYTIyZmQtMDAwNC00MGE3LWI0NDctOTVjYjE1MWU5YjU3XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_Ratio0.6800_AL_.jpg",
        title: "Clerks: The Lost Scene",
        description: "(2004 Video)",
      },
      {
        id: "tt0435150",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMzY3YTc4MzMtMTRlMS00MzNjLTkzNjQtZWUwMjA2YWMwZjliXkEyXkFqcGdeQXVyMzU2NzcwMjQ@._V1_Ratio1.2400_AL_.jpg",
        title: "The Lost Tape: Andy's Terrifying Last Days Revealed",
        description: "(2004 Video)",
      },
      {
        id: "tt0418933",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTI4NTMyMTk0OF5BMl5BanBnXkFtZTcwODQ4MDcyMQ@@._V1_Ratio0.6800_AL_.jpg",
        title: "Lost Reality",
        description: "(2004 Video)",
      },
      {
        id: "tt0366137",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTI4OTM3Mzg0Ml5BMl5BanBnXkFtZTcwNDkyNDMzMQ@@._V1_Ratio0.6800_AL_.jpg",
        title: "Lost Embrace",
        description: "(2004)",
      },
      {
        id: "tt0391143",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BZmZjNTliZDEtOTEwYS00NjU1LTlmMmMtZmE0NTNiMjIwMDk1XkEyXkFqcGdeQXVyNDEzMTI3MTU@._V1_Ratio0.7200_AL_.jpg",
        title: "Lost Generation",
        description: "(2004)",
      },
      {
        id: "tt0422962",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTM4OTE4NjM1M15BMl5BanBnXkFtZTcwNTU3NzgyMQ@@._V1_Ratio0.6800_AL_.jpg",
        title: "Pirate Kids: Blackbeard's Lost Treasure",
        description: "(2004 Video)",
      },
      {
        id: "tt0406514",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTU3Njc2ODg5Nl5BMl5BanBnXkFtZTcwMzM1ODUyMQ@@._V1_Ratio0.7200_AL_.jpg",
        title:
          "Adventures of Young Van Helsing: The Quest for the Lost Scepter",
        description: "(2004 Video)",
      },
      {
        id: "tt0419925",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BYTVjZjlkNWItMjJhMS00NTAxLWFkM2UtZjc5YTdhOTQwNjI1XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_Ratio0.6800_AL_.jpg",
        title: "Lost on Location: Behind the Scenes of 'Lost in Translation'",
        description: "(2004 Video)",
      },
      {
        id: "tt0471197",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTEyMDc1MDAyNDZeQTJeQWpwZ15BbWU3MDUzNDc2OTE@._V1_Ratio0.7200_AL_.jpg",
        title: "Hitler's Lost Plan",
        description: "(2004 TV Movie)",
      },
      {
        id: "tt0963183",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTgzNjU0NjU0M15BMl5BanBnXkFtZTcwMzE2MjQ0MQ@@._V1_Ratio0.6800_AL_.jpg",
        title: "Lost: Black Earth",
        description: "(2004)",
      },
      {
        id: "tt0444234",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDVhZTNkOWYtZDkyMS00YzVjLThhNGEtNWY4OWYzZDVmMmM3XkEyXkFqcGdeQXVyMjQ5NjgwMjA@._V1_Ratio0.7600_AL_.jpg",
        title: "The Lost Boys: A Retrospective",
        description: "(2004 Video)",
      },
      {
        id: "tt0400738",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjhiM2FmNzQtZGFjNC00M2RhLWE4YjctYWM4ZGY4NDExNDkyXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_Ratio0.6800_AL_.jpg",
        title: "Pitfall: The Lost Expedition",
        description: "(2004 Video Game)",
      },
      {
        id: "tt0455972",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BOGQ5Y2EyMzctZDNhZC00YjE2LTlmYjQtYmIzN2U1ZDdlYTRiXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_Ratio0.7200_AL_.jpg",
        title: "Looking for the Lost Voice",
        description: "(2004)",
      },
      {
        id: "tt1537232",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "City of Lost Angels",
        description: "(2004 Video)",
      },
      {
        id: "tt0445095",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTZmZWFlZGQtNjM0NS00Y2I4LTk5MmEtODZiN2MyZGMwNDQ5XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_Ratio0.6800_AL_.jpg",
        title: "Bruja and the Lost City of Gold",
        description: "(2004)",
      },
      {
        id: "tt1332714",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Lost Nuke",
        description: "(2004 TV Movie)",
      },
      {
        id: "tt0420423",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Lost Buildings of Britain",
        description: "(2004– )",
      },
      {
        id: "tt0391303",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "The Lost Girl Society",
        description: "(2004)",
      },
    ],
    });

  const [random, setRandom] = useState("a");

  const slides = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "22px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "22px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const sliderStyles = {
    position: "relative",
    height: "100%",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: "white",
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(
  //       `https://imdb-api.com/en/API/Search/${process.env.NEXT_PUBLIC_RAPID_API_HOST}/${fr}`
  //     );
  //     const data = await res.json();
  //     //const results = data.items;
  //     setResult(data);
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, []);

  const handlePlay = (e) => {
    Router.push({
      pathname: "../logged_in/playMovie",
      query: e,
    });
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={styles.containerStyles}>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div style={sliderStyles}>
          <div>
            <div onClick={goToPrevious} style={leftArrowStyles}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuMjM3IDE3LjIzN3YtMi40NzRsMTQgMTRjLjY4NC42ODMuNjg0IDEuNzkgMCAyLjQ3NGExLjc0OCAxLjc0OCAwIDAgMS0yLjQ3NCAwbC0xNC0xNGExLjc0OCAxLjc0OCAwIDAgMSAwLTIuNDc0bDE0LTE0YTEuNzQ4IDEuNzQ4IDAgMCAxIDIuNDc0IDBjLjY4NC42ODMuNjg0IDEuNzkgMCAyLjQ3NGwtMTQgMTR6IiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+"
                alt=""
                style={{
                  width: "30px",
                  height: "34px",
                }}
              />
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0Ljc2MyAxNy4yMzd2LTIuNDc0bC0xNCAxNGExLjc0OCAxLjc0OCAwIDAgMCAwIDIuNDc0Yy42ODMuNjg0IDEuNzkuNjg0IDIuNDc0IDBsMTQtMTRhMS43NDggMS43NDggMCAwIDAgMC0yLjQ3NGwtMTQtMTRBMS43NSAxLjc1IDAgMCAwIC43NjMgMy4yMzdsMTQgMTR6IiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+"
                alt=""
                style={{
                  width: "30px",
                  height: "34px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${result?.results[currentIndex].image})`,
                width: "65%",
                height: "350px",
                borderRadius: "0px 0px 1000px 0px",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div style={{ marginLeft: "70px" }}>
              <div
                style={{
                  position: "relative",
                  top: "100px",
                  color: "white",
                  fontSize: "32px",
                }}
              >{`${result?.results[currentIndex].title}`}</div>
              <div
                style={{
                  position: "relative",
                  top: "100px",
                  color: "white",
                  fontSize: "16px",
                  marginTop: "20px",
                }}
              >
                {`${result?.results[currentIndex].description}`}
              </div>
              <div
                style={{
                  position: "relative",
                  top: "150px",
                  left: "100px",
                  color: "white",
                  fontSize: "22px",
                  marginTop: "20px",
                }}
               onClick={() => handlePlay(result?.results[currentIndex])} >
                Watch now
              </div>
            </div>
          </div>

          <div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex) => (
              <div
                style={dotStyle}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideBar;
