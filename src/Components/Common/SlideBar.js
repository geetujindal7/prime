import { useEffect, useState } from "react";
import styles from "../../../styles/Slidebar.module.css";

const SlideBar = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
  //       `https://imdb-api.com/en/API/Search/${process.env.NEXT_PUBLIC_RAPID_API_HOST}/night`
  //     );
  //     const data = await res.json();
  //     //const results = data.items;
  //     setResult(data);
  //     console.log(result);
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, []);

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
  const slideStylesWidthBackground = {
    ...slideStyles,
    width: "65%",
    height: "300px",
    borderRadius: "0px 0px 500px 0px",

    // transform: "skewX(20deg)"
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
                width: "60%",
                height: "28px",
                borderRadius: "0px 0px 1000px 0px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div>
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
              >
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
