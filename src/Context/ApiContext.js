import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const ApiURL = "https://www.omdbapi.com/?apikey=eae5fd6&s=game";

const AppProvider = ({children}) => {

    const [result, setResult] = useState()
    const [pageNo, setPageNo] = useState(5)
    const [data , setData] = useState([])

    const HandlePageNo = (pageNumber) => {
        //setPageNo(pageNumber)
    }

    console.log("page", pageNo)

    // useEffect(() => {
    //    async function fetchData() {
    //     // const req  = await fetch(ApiURL);
    //     // const resp = await req.json();
    //     // console.log(resp)
                
    //   const res = await  fetch(`https://imdb-api.com/en/API/Top250Movies/${process.env.NEXT_PUBLIC_RAPID_API_HOST}`)
    //   const data = await res.json()
    //   const results = data.results
    //   setResult(results)
    //    }
    //     fetchData()
    // }, [])
    console.log(result)
    return <AppContext.Provider value={{result, HandlePageNo}}>
    
        {children}
    </AppContext.Provider>
}

export  {AppContext, AppProvider};


