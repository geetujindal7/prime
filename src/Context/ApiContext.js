import { createContext, useEffect, useState } from "react";


function getStorageValue(key, defaultValue) {
    // getting stored value
    if(typeof window !== 'undefined')
    {
    const saved = localStorage.getItem('wishlists');
    const initial = JSON.parse(saved);
    return initial || [];
    }
  }
const AppContext = createContext();

const ApiURL = "https://www.omdbapi.com/?apikey=eae5fd6&s=game";

const AppProvider = ({children}) => {

    const [wishlist , setWishlist] = useState(getStorageValue())

    const HandleWishlist = (data) => {
        setWishlist([...wishlist, data])
        console.log(data)
        }

        useEffect(() => {
            localStorage.setItem('wishlists', JSON.stringify(wishlist));
          }, [wishlist])

    return <AppContext.Provider value={{HandleWishlist , wishlist}}>
        {children}
    </AppContext.Provider>
}

export  {AppContext, AppProvider};


