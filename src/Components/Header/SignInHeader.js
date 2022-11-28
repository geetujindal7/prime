import Image from "next/image";
import { useContext, useState } from "react";
import styles from "./header.module.css";
import { useAuth } from "../../Context/AuthUserContext";
import { useRouter } from "next/router";
import Router, { withRouter } from 'next/router'
import SignOut from "../Common/SignOut";
import { AppContext } from "../../Context/ApiContext";


function SignInHeader() {
  const { authUser } = useAuth();
  const [searchIcon, setSearchIcon] = useState(false);
  const [Search, setSearch] = useState()
  const context = useContext(AppContext);
  const router = useRouter();

  
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchIcon(!searchIcon)
    if(Search)
    {
      Router.push({
        pathname: 'logged_in/search',
        query: {
          "Search" : Search
      }
    });
    }
    else{
      return
    }
    
  }
  

  return (
    <>
    <form onSubmit={handleSearch}>
    <div
      style={{
        display: "flex",
        padding: "10px",
      }}
    >
      {searchIcon && (
        <input className={styles.searchIcon} placeholder="Search" onChange={(e) => setSearch(e.target.value)} type="text"  />
      )}
      <img
        className={searchIcon ? styles.icons : styles.icon}
        onClick={handleSearch}
        src="http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey.svg"
        alt="test"
        width={40}
        height={30}
        type="submit"
      />
      <div
        style={{
          display: "flex",
          marginLeft: "10px",
        }}
      >
        <Image
          src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
          width={32}
          height={32}
          alt="test"
        />
        <h3 className={styles.name} onClick={() => context.HandleShowProfileDetails()}>{authUser?.displayName}</h3>
      </div>
    </div>
    </form>
    </>
  );
}

export default SignInHeader;
