/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../src/Context/ApiContext";
import styles from "../../styles/newMember.module.css";

function create() {
  const context = useContext(AppContext);
  const [key, setKey] = useState(2);
  const [name, setName] = useState("");
  // const [defaults, setdefaults] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setKey(context.members?.length + 1);
  }, [key]);

  const handleValue = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
    context.HandleMember(name)
    setName("")
    Router.push({
      pathname: "../logged_in/manage", 
    });
  }
  return (
    <>
    <div style={{margin: "30px"}}>
      <Link href="/logged_in"> <div className={styles.Image_logo}>
         <Image 
          width="120"
          height="40"
          src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
          alt="test"
        />
    </div></Link>
    </div>
    <div className={styles.cardContainer}>
      <div className={styles.cardContainerItem} style={{ textAlign: "center" }}>
        <h1>New profile</h1>
        <div>
          <Image
            src={`https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-${key}.png`}
            width={150}
            height={150}
            style={{ marginRight: "10px", marginBottom: "30px" }}
            alt="test"
          />
        </div>
        <div>
          <input
            className={styles.inputText}
            type="text"
            minLength={1}
            maxLength={20}
            required
            value={name}
            placeholder="Enter Name"
            onChange={handleValue}
          />
        </div>
        <div style={{
          display: "flex",
          padding: "20px 40px",
        }}>
          <Link href="../logged_in/manage">
          <button style={{marginRight:"18px"}} className={styles.cancel}>
            Cancel
          </button>
          </Link>
          <button onClick={handleSubmit} className={styles.cancel}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default create;
