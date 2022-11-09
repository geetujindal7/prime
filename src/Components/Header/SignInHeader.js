import Image from "next/image";
import { useState } from "react";
import styles from "./header.module.css";
import { useAuth } from "../../Context/AuthUserContext";

function SignInHeader() {
  const { authUser } = useAuth();
  const [searchIcon, setSearchIcon] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
      }}
    >
      {searchIcon && (
        <input className={styles.searchIcon} placeholder="Search" type="text" />
      )}
      <img
        className={searchIcon ? styles.icons : styles.icon}
        onClick={() => setSearchIcon(!searchIcon)}
        src="http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey.svg"
        alt=""
        width={40}
        height={30}
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
        />
        <h3 className={styles.name}>{authUser?.displayName}</h3>
      </div>
    </div>
  );
}

export default SignInHeader;
