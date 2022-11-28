import Image from "next/image";
import React, { useContext } from "react";
import styles from "../../../styles/SignOut.module.css";
import { useAuth } from '../../../src/Context/AuthUserContext';
import { useRouter } from "next/router";
import { AppContext } from "../../Context/ApiContext";



function SignOut() {
    const { authUser, signOut } = useAuth();
    const router = useRouter();
    const context = useContext(AppContext)

    const handleSignOut = () => {
        signOut()
        router.push('/')
        context.HandleShowProfileDetails()
    }

  return (
    <ul className={styles.SignOutContainer}>
      <div style={{ width: "200px" }}>
        <span style={{}}>
          <li
            style={{
              listStyle: "none",
              margin: "20px",
              color: "#c4cacf",
              fontSize: "15px",
            }}
          >
            Account and Settings
          </li>
          <li
            style={{
              listStyle: "none",
              margin: "20px",
              color: "#c4cacf",
              fontSize: "15px",
            }}
          >
            Watch Anywhere
          </li>
          <li
            style={{
              listStyle: "none",
              margin: "20px",
              color: "#c4cacf",
              fontSize: "15px",
            }}
          >
            Help
          </li>
          <li
            style={{
              listStyle: "none",
              margin: "20px",
              color: "#c4cacf",
              fontSize: "15px",
            }}
          onClick={handleSignOut}
          >
            Not {authUser?.displayName}? Sign Out
          </li>
        </span>
      </div>
      <hr style={{ color:"#414c53", backgroundColor:"#414c53"}}></hr>
      <div style={{ width: "200px" }}>
        <span style={{}}>
          <li
            style={{
              listStyle: "none",
              margin: "20px",
              color: "#c4cacf",
              display: "flex",
              fontSize: "15px",
            }}
          >
             <Image
          src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
          width={32}
          height={32}
          style={{marginRight: "10px"}}
          alt="test"
        />
        <h3 style={{marginTop: "5px",  fontSize: "15px"}}>Geetu</h3>
          </li>
          <li
            style={{
              listStyle: "none",
              margin: "20px",
              color: "#c4cacf",
              fontSize: "15px",
               display: "flex",
            }}
          >
             <Image
          src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
          width={32}
          height={32}
          style={{marginRight: "10px"}}
          alt="test"
        />
        <h3 style={{marginTop: "5px",  fontSize: "15px"}}>Kids</h3>
          </li>
          <li
            style={{
              listStyle: "none",
              margin: "20px",
              color: "#c4cacf",
              fontSize: "15px",
              display: "flex",
            }}
          >
              <Image
          src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
          width={32}
          height={32}
          style={{marginRight: "10px"}}
          alt="test"
        />
        <h3 style={{marginTop: "5px",  fontSize: "15px"}}>Add New</h3>
          </li>
          <li
            style={{
              listStyle: "none",
              margin: "20px",
              color: "#c4cacf",
              fontSize: "15px",
            }}
          >
            Manage Profiles
          </li>
          <li
            style={{
              listStyle: "none",
              margin: "20px",
              color: "#c4cacf",
              fontSize: "15px",
            }}
          >
           Learn More
          </li>
        </span>
      </div>
    </ul>
  );
}

export default SignOut;
