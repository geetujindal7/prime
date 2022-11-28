import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../src/Context/ApiContext";
import styles from "../../styles/newMember.module.css";

function create() {
  const context = useContext(AppContext);
  const [key, setKey] = useState(2);

  useEffect(() => {
    setKey(context.members?.length + 1);
  }, [key]);

  return (
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
            placeholder="Enter Name"
          />
        </div>
      </div>
    </div>
  );
}

export default create;
