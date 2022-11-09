import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const ApiURL = "https://www.omdbapi.com/?apikey=eae5fd6&s=game";

const AppProvider = ({children}) => {

    const [result, setResult] = useState()

    useEffect(() => {
       async function fetchData() {
        // const req  = await fetch(ApiURL);
        // const resp = await req.json();
        // console.log(resp)

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST
            }
        };
        
      const res = await  fetch('https://ott-details.p.rapidapi.com/advancedsearch', options)
      const data = await res.json()
      const results = data.results
      setResult(results)
       }
        // const data  = req.then((data) => console.log(data))
        // console.log(data)
        fetchData()
    }, [])
    console.log(result)
    return <AppContext.Provider value={result}>
    
        {children}
    </AppContext.Provider>
}

export  {AppContext, AppProvider};


