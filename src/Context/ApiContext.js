import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthUserContext";


function getStorageValue(key, defaultValue) {
    // getting stored value
    if(typeof window !== 'undefined')
    {
    const saved = localStorage.getItem('wishlists');
    const initial = JSON.parse(saved);
    return initial || [];
    }
  }

  function getStorageValues(key, defaultValue) {
    // getting stored value
    if(typeof window !== 'undefined')
    {
    const saved = sessionStorage.getItem('login');
    const initial = JSON.parse(saved);
    return initial || defaultValue;
    }
  }
  
  function getMemberValue(key, defaultValue) {
    // getting stored value
    if(typeof window !== 'undefined')
    {
    const saved = sessionStorage.getItem('members');
    const initial = JSON.parse(saved);
    return initial || [];
    }
  }
const AppContext = createContext();

const ApiURL = "https://www.omdbapi.com/?apikey=eae5fd6&s=game";

const AppProvider = ({children}) => {
    const [wishlist , setWishlist] = useState(getStorageValue())
    const [ShowProfileDetails, SetShowProfileDetails] = useState(false)
    const [login, setLogin] = useState(() => {
        return getStorageValues('login', false);
      });
      const [members, setMember] = useState(getMemberValue())

    const HandleWishlist = (data) => {
        setWishlist([...wishlist, data])
        console.log(data)
        }

        const HandleMember = (data) => {
            setMember([...members, data])
            console.log(data)
            }
    // const handleLogin = () => {
        // setLogin(!login)
    

    const HandleShowProfileDetails = () => {
        SetShowProfileDetails(!ShowProfileDetails)
    }
    const HandleRemoveWishlist = (id) => {
        const remove = wishlist.filter((e) => e.imDbId != id)
        setWishlist(remove)
    }

        useEffect(() => {
            localStorage.setItem('wishlists', JSON.stringify(wishlist));
            sessionStorage.setItem('login', JSON.stringify(login));
            sessionStorage.setItem('members', JSON.stringify(members));

          }, [wishlist, login, members])

    return <AppContext.Provider value={{HandleWishlist , wishlist, HandleRemoveWishlist, HandleShowProfileDetails, ShowProfileDetails, setLogin, login,members, HandleMember}}>
        {children}
    </AppContext.Provider>
}

export  {AppContext, AppProvider};


