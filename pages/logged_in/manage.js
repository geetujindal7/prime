import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { AppContext } from '../../src/Context/ApiContext';
import styles from "../../styles/newMember.module.css";


function manage() {
    const context = useContext(AppContext)
    console.log(context.members)
    const arr = ["Geetu", "ABC", "Jindal", "Match", "Check"];

  return (
    <div className={styles.cardContainer}>
    <div className={styles.cardContainerItem}>
      <h1>Who's watching?</h1>
      <div className={styles.cardContainerItem} style={{display:"flex"}}>
      {context.members?.map((e, key) => {
            return (
              <>
                <li className={styles.listStyleFlex}>
                  <Image
                    src={`https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-${
                      key + 1
                    }.png`}
                    width={150}
                    height={150}
                    style={{ marginRight: "10px" }}
                    alt="test"
                  />
                  <h3 style={{ marginTop: "10px",textAlign: "center", fontSize: "15px" }}>{e}</h3>
                </li>
              </>
            );
          })}
          <li className={styles.listStyleFlex}>
          <Link href="../logged_in/associate">
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRjJGNEY2IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMSAxMGgxOE0xMCAxOVYxIi8+PC9nPjwvc3ZnPg=="
              width={150}
              height={150}
              style={{
                marginRight: "10px",
                backgroundColor: "#425265",
                backgroundPosition: "50%",
                backgroundSize: "12px",
                borderRadius: "50%",
                padding: "60px",
               
              }}
              alt="test"
            />
           <h3 style={{textAlign: "center", marginTop: "10px", fontSize: "15px" }}>Add New</h3></Link>
          </li>
      </div>
   </div>
   </div>
  )
}

export default manage