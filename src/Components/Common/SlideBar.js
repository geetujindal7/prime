// import { useContext, useEffect, useState } from "react";
// import styles from "../../../styles/Slidebar.module.css";
// import { AppContext } from "../../Context/ApiContext";
// import SimpleImageSlider from "react-simple-image-slider";


// const SlideBar = () => {
//   //const {results, HandlePageNo} = useContext(AppContext);
//   const [result, setResult] = useState()
//   const resu = [
//         "https://media.istockphoto.com/id/1191001701/photo/popcorn-and-clapperboard.jpg?s=612x612&w=0&k=20&c=iUkFTVuU8k-UCcZDxczTWs6gkRa0nAMihp2Jf_2ASKM=",
//         "https://res.cloudinary.com/people-matters/image/upload/f_auto,q_auto,w_800,h_800,c_lpad/v1517845732/1517845731.jpg",
//         "https://ted-ielts.com/wp-content/uploads/2019/04/movies-1_fcslqf.jpg",
//         "https://media.istockphoto.com/id/1191001701/photo/popcorn-and-clapperboard.jpg?s=612x612&w=0&k=20&c=iUkFTVuU8k-UCcZDxczTWs6gkRa0nAMihp2Jf_2ASKM=",
//         "https://res.cloudinary.com/people-matters/image/upload/f_auto,q_auto,w_800,h_800,c_lpad/v1517845732/1517845731.jpg",
//         "https://ted-ielts.com/wp-content/uploads/2019/04/movies-1_fcslqf.jpg",
//         "https://media.istockphoto.com/id/1191001701/photo/popcorn-and-clapperboard.jpg?s=612x612&w=0&k=20&c=iUkFTVuU8k-UCcZDxczTWs6gkRa0nAMihp2Jf_2ASKM=",
//         "https://res.cloudinary.com/people-matters/image/upload/f_auto,q_auto,w_800,h_800,c_lpad/v1517845732/1517845731.jpg",
//         "https://ted-ielts.com/wp-content/uploads/2019/04/movies-1_fcslqf.jpg",
//         "https://media.istockphoto.com/id/1191001701/photo/popcorn-and-clapperboard.jpg?s=612x612&w=0&k=20&c=iUkFTVuU8k-UCcZDxczTWs6gkRa0nAMihp2Jf_2ASKM=",
//         "https://res.cloudinary.com/people-matters/image/upload/f_auto,q_auto,w_800,h_800,c_lpad/v1517845732/1517845731.jpg",
//         "https://ted-ielts.com/wp-content/uploads/2019/04/movies-1_fcslqf.jpg"
//     ]


//     
      
//       const App = () => {
//         return (
//           <div>
//             <SimpleImageSlider
//               width={896}
//               height={504}
//               images={images}
//               showBullets={true}
//               showNavs={true}
//             />
//           </div>
//         );
//       }
// //   useEffect(() => {
// //     async function fetchData() {
// //      // const req  = await fetch(ApiURL);
// //      // const resp = await req.json();
// //      // console.log(resp)
             
// // //    const res = await  fetch(`https://imdb-api.com/en/API/MostPopularMovies/${process.env.NEXT_PUBLIC_RAPID_API_HOST}`)
// // //    const data = await res.json()
// // //    const results = data.items
// // //    setResult(results)
// //     }
// //      fetchData()
// //  }, [])
// //  console.log(result)
// //   return (
// //     // <div>
// //     //   {context.result?.map((e) => {
// //     //       return (
// //     //           <img className={styles.mainImage} src={e.backdropURLs[1280]} alt="" />
// //     //       )
// //     //   })}
// //     // </div>

// //     //     <div className="slide-container">
// //     //     <Slide>
// //     //      {context.result?.map((e, index)=> (
// //     //         <div className="each-slide" key={index}>
// //     //           <div style={{'backgroundImage': `url(${e.backdropURLs[1280]})`}}>
// //     //             <span>{e.title}</span>
// //     //           </div>
// //     //         </div>
// //     //       ))}
// //     //     </Slide>
// //     //   </div>
// //     <div>
// //     {resu && resu.map((e, index)=> (
// //       <div className={styles.eachslideeffect}>
// //         {/* <div style={{ backgroundImage: `url(${e.backdropURLs[1280]})` }}>
// //           <span>Slide 1</span>
// //         </div> */}
// //         {/* <img className={styles.mainImage} src={e} alt="" /> */}
// //         <SimpleImageSlider
// //         width={896}
// //         height={504}
// //         images={e}
// //         showBullets={true}
// //         showNavs={true}
// //       />
// //       </div>
// //     ))}
// //     </div>

// //   );
// };

// export default SlideBar;

import { useState } from "react";
//  import styles from "../../../styles/Slidebar.module.css";


const SlideBar = () => {
const slides = [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png", title: "beach" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg", title: "boat" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", title: "forest" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg", title: "city" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "100%",
    height: "300px",
    margin: "0 auto",
    background: "linear-gradient(to right,  #9c9e9f 10%,#000000 100%)"
  };
  
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
    color: "white"
  };

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
    width: "75%",
    height: "300px",
    // borderRadius: "0px 0px 500px 0px",
    transform: "skewX(20deg)"
  };

  return (
   <div style={containerStyles}>
 <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuMjM3IDE3LjIzN3YtMi40NzRsMTQgMTRjLjY4NC42ODMuNjg0IDEuNzkgMCAyLjQ3NGExLjc0OCAxLjc0OCAwIDAgMS0yLjQ3NCAwbC0xNC0xNGExLjc0OCAxLjc0OCAwIDAgMSAwLTIuNDc0bDE0LTE0YTEuNzQ4IDEuNzQ4IDAgMCAxIDIuNDc0IDBjLjY4NC42ODMuNjg0IDEuNzkgMCAyLjQ3NGwtMTQgMTR6IiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+" alt="" style={{
            width: "30px",
            height: "34px"
        }}/>
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0Ljc2MyAxNy4yMzd2LTIuNDc0bC0xNCAxNGExLjc0OCAxLjc0OCAwIDAgMCAwIDIuNDc0Yy42ODMuNjg0IDEuNzkuNjg0IDIuNDc0IDBsMTQtMTRhMS43NDggMS43NDggMCAwIDAgMC0yLjQ3NGwtMTQtMTRBMS43NSAxLjc1IDAgMCAwIC43NjMgMy4yMzdsMTQgMTR6IiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+" alt="" style={{
            width: "30px",
            height: "34px"
        }} />
        </div>
      </div>
      <div style={{
          display: "flex"
      }}>
      <img style={slideStylesWidthBackground} src={`${slides[currentIndex].url}`}></img>
      <div style={{
          position: "relative",
          right: "100px",
          top: "100px"
      }}>Title</div>
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
   </div>
  );
};

export default SlideBar;