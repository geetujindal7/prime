/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthUserContext";

function getStorageValue(key, defaultValue) {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("wishlists");
    const initial = JSON.parse(saved);
    return initial || [];
  }
}

function getStorageValues(key, defaultValue) {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = sessionStorage.getItem("login");
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  }
}

function getMemberValue(key, defaultValue) {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = sessionStorage.getItem("members");
    const initial = JSON.parse(saved);
    return initial || [];
  }
}
const AppContext = createContext();

const ApiURL = "https://www.omdbapi.com/?apikey=eae5fd6&s=game";

const AppProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(getStorageValue());
  const [ShowProfileDetails, SetShowProfileDetails] = useState(false);
  const [login, setLogin] = useState(() => {
    return getStorageValues("login", false);
  });
  const [members, setMember] = useState(getMemberValue());
  const [edited, setEdited] = useState();
  const [userProfile, setuserProfile] = useState({
    name: '',
    id: 1
  })
  const [ShowCategoriesDropdown, SetShowCategoriesDropdown] = useState(false);
  const [categoriesFilterdData, setcategoriesFilterdData] = useState([])

  useEffect(() => {
    const a = [...members]
    const dup = [...new Set(a)]
    const nul = dup.filter((n) => n!=  null || '' || undefined)
    setMember(nul)
  }, [userProfile])

  const HandleWishlist = (data) => {
    setWishlist([...wishlist, data]);
  };

  const handleEdit = (value) => {
    setEdited(value);
  };

  const handleEditArray = (newValue, key) => {
    let newArr = [...members];
    newArr[key] = newValue;
    setMember(newArr)
  };

  const handlecategoriesFilterdData = (data) => {
    setcategoriesFilterdData(data)
  }

  const HandleMember = (data) => {
    setMember([...members, data]);
  };

  const handleRemove = (item, key) => {
    let newArr = [...members];
    let removed = newArr.filter((e) => e !== item)
    setMember(removed)
  }

  const handleProfile = (name, id) => {
    setuserProfile(prevState => ({
      ...prevState,
      name: name, 
      id: id
  }))
  }

  const HandleShowProfileDetails = () => {
    SetShowProfileDetails(!ShowProfileDetails);
  };

  const HandleShowCategoriesDropdown = () => {
    SetShowCategoriesDropdown(!ShowCategoriesDropdown);
  };

  const HandleRemoveWishlist = (id) => {
    const remove = wishlist.filter((e) => e.imDbId != id);
    setWishlist(remove);
  };

  useEffect(() => {
    localStorage.setItem("wishlists", JSON.stringify(wishlist));
    sessionStorage.setItem("login", JSON.stringify(login));
    sessionStorage.setItem("members", JSON.stringify(members));
  }, [wishlist, login, members]);

  return (
    <AppContext.Provider
      value={{
        HandleWishlist,
        wishlist,
        HandleRemoveWishlist,
        HandleShowProfileDetails,
        ShowProfileDetails,
        setLogin,
        login,
        members,
        setMember,
        HandleMember,
        handleEdit,
        edited,
        handleEditArray,
        handleRemove,
        handleProfile,
        userProfile, 
        HandleShowCategoriesDropdown,
        ShowCategoriesDropdown,
        SetShowCategoriesDropdown,
        handlecategoriesFilterdData,
        categoriesFilterdData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
