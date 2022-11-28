import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../src/Context/ApiContext";
import { useAuth } from "../../src/Context/AuthUserContext";
import styles from "../../styles/newMember.module.css";

function NewMember() {
  const { authUser } = useAuth();
  const context = useContext(AppContext);

 

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContainerItem}>
        <h1>New profile</h1>
        <p>
          Create an Amazon profile for Prime Video or add an existing one below.
        </p>
        <div className={styles.learnText}>Learn more about Profiles</div>
        <Link href="../logged_in/create">
        <div
          style={{
            textAlign: "center",
          }}
        >
          <button className={styles.createProfile}>Create profile</button>
        </div>
        </Link>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            marginLeft: "180px",
          }}
        >
          <Link href="/logged_in/manage">
          <button className={styles.cancel}>Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewMember;
