import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../src/Components/Header/Header'
import SearchedResult from '../../src/Components/Searched/SearchedResult'
import { AppContext } from '../../src/Context/ApiContext'
import styles from '../../styles/Search.module.css'

function CategoryItem() {
   const router =  useRouter()
   const {categoriesFilterdData} = useContext(AppContext);

   const query = router.query;
   console.log(categoriesFilterdData, query.item)
   const [data, setdata] = useState(
       {
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
      {
        id: "tt5034800",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BZmY5Y2U2ODMtODY1Ny00NTdmLWJlNDYtMmNmNWNkOGRkZDQ2XkEyXkFqcGdeQXVyNDAwODEwMDE@._V1_Ratio1.3600_AL_.jpg",
        title: "A Day in the Life of a Lost Boy",
        description: "(2004)",
      },
      {
        id: "tt0426518",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTIyMDU5NDE2N15BMl5BanBnXkFtZTcwMzI3ODgyMQ@@._V1_Ratio0.7600_AL_.jpg",
        title: "The Lost Cause",
        description: "(2004)",
      },
      {
        id: "tt1003035",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Pharaoh's Revenge: Egypt's Lost Treasure",
        description: "(2004 TV Movie)",
      },
      {
        id: "tt0815450",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "D-Day: The Lost Evidence",
        description: "(2004 TV Movie)",
      },
      {
        id: "tt4164368",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Lost in Transition",
        description: "(2004)",
      },
      {
        id: "tt1830453",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTVlNTRkNjMtMjgxNS00Zjg0LWJjMjAtMTEwNTQ5NTFmYzRmXkEyXkFqcGdeQXVyODYzMzYzNzM@._V1_Ratio0.6800_AL_.jpg",
        title: "1:1.6 An Ode to Lost Love",
        description: "(2004)",
      },
      {
        id: "tt1529661",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Tartuffe. the Lost Film",
        description: "(2004 Video)",
      },
      {
        id: "tt5955402",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BM2JiZWFiYjUtZGUzNi00MjAwLWE3YTYtNDQ1YjQ2YzhjMjc1XkEyXkFqcGdeQXVyNDU0ODI1NjQ@._V1_Ratio0.6800_AL_.jpg",
        title: "The Lost Disc: Becoming Barbossa",
        description: "(2004 Video)",
      },
      {
        id: "tt1561325",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title:
          "A Second Final Rest: The History of San Francisco's Lost Cemeteries",
        description: "(2004)",
      },
      {
        id: "tt0426282",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BZjEzYWI4NWUtNWNkYy00MWMxLTkyNWUtMTFkNjczNDY4MDBmL2ltYWdlXkEyXkFqcGdeQXVyNTMwNDA4OQ@@._V1_Ratio0.6800_AL_.jpg",
        title: "Lost",
        description: "(2004 TV Movie)",
      },
      {
        id: "tt4191282",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title:
          "Vanished in the Mist: Lost Newfoundland - The Tidal Waves 1929 On (Part 3)",
        description: "(2004)",
      },
      {
        id: "tt0483046",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "The Lost Season",
        description: "(2004 Video)",
      },
      {
        id: "tt3659102",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Reptile Kings: Search for the Lost Viper",
        description: "(2004 TV Movie)",
      },
      {
        id: "tt1455217",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTI2NDBkNzItYjFmYS00MmQ5LTlkNjAtZDhlNDk4MTliZWE0XkEyXkFqcGdeQXVyMjA2ODA5MDc@._V1_Ratio0.7600_AL_.jpg",
        title: "Lost & Found",
        description: "(2004)",
      },
      {
        id: "tt4191116",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title:
          "Vanished in the Mist: Lost Newfoundland - Life in the Undertow 1825 to 1929 (Part 2)",
        description: "(2004)",
      },
      {
        id: "tt5955462",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWVhMTVmMGQtZGIyMy00ZmQ2LWJhYjMtNmZhNzU2ZTY4NDFkXkEyXkFqcGdeQXVyNDU0ODI1NjQ@._V1_Ratio0.6800_AL_.jpg",
        title: "The Lost Disc: That She Blows",
        description: "(2004 Video)",
      },
      {
        id: "tt4191064",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title:
          "Vanished in the Mist: Lost Newfoundland - Storms Over the Island 1400s to Early 1800s (Part One)",
        description: "(2004)",
      },
      {
        id: "tt2753936",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTU0NDI2M2MtZTk5MC00NGIwLWJkMmUtOGUzNTljNDcxNmY5XkEyXkFqcGdeQXVyMTQ5MTA3MTA@._V1_Ratio0.6800_AL_.jpg",
        title: "Lost!",
        description: "(2004)",
      },
      {
        id: "tt0453907",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Shin Sung-Il is Lost",
        description: "(2004)",
      },
      {
        id: "tt1536123",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Lost in Found",
        description: "(2004)",
      },
      {
        id: "tt4925956",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Lost",
        description: "(II) (2004)",
      },
      {
        id: "tt5955468",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BOGExMjE1YTgtY2YyMy00MTk4LTgyN2ItYzNmY2RkNjdiNGEwXkEyXkFqcGdeQXVyNDU0ODI1NjQ@._V1_Ratio0.6800_AL_.jpg",
        title: "The Lost Disc: Pirates Around the World",
        description: "(2004 Video)",
      },
      {
        id: "tt0468850",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Lost My Way",
        description: "(2004)",
      },
      {
        id: "tt5955464",
        resultType: "Title",
        image:
          "https://m.media-amazon.com/images/M/MV5BZDc1MjAzNDUtZTkwNi00OWM5LWJjZTUtMmI3MmM3NDExMmI4XkEyXkFqcGdeQXVyNDU0ODI1NjQ@._V1_Ratio0.6800_AL_.jpg",
        title: "The Lost Disc: The Monkey's Name Is Jack",
        description: "(2004 Video)",
      },
      {
        id: "tt0496788",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Lost Paradise",
        description: "(2004 Video)",
      },
      {
        id: "tt0406108",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Obey the Lost Skeleton!",
        description: "(2004 Video)",
      },
      {
        id: "tt0457579",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Innocence Lost",
        description: "(2004)",
      },
      {
        id: "tt0418869",
        resultType: "Title",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        title: "Mano Mano 3: Arnis the Lost Art",
        description: "(2004)",
      },
    ],
    errorMessage: "",
  }
  );

    // useEffect(() => {
    //   async function fetchData() {
    //     const res = await fetch(
    //       `https://imdb-api.com/en/API/Search/${process.env.NEXT_PUBLIC_RAPID_API_HOST}/${query.Search}`
    //     );
    //     const data = await res.json();
    //     console.log(data);
    //     //const results = data.items;
    //     setdata(data);
    //   }
    //   fetchData();
    // }, []);
  return (
   <div>
       <Header />
       <div className={styles.searchHeader}>
        <p className={styles.ResultText}>
            {query.item}
        </p>
        <button className={styles.refineButton}>Refine</button>
       </div>
       {/* <hr style={{ backgroundColor:"yellow", color: "yellow"}} className={styles.hrStyle}> */}
       <hr style={{height:"0.2px",borderWidth:"0",margin: "0px 32px",  color:"#8197a4", backgroundColor:"#8197a4"}}></hr>
       <div className={styles.images_container}>
      {categoriesFilterdData?.map((e, key) => {
          return (
       <SearchedResult data={e} index = {key} />
          )})
      }
   </div>
   </div>
  )
}

export default CategoryItem