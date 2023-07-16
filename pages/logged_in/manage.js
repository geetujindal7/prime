/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */

import Image from 'next/image';
import Link from 'next/link';
import  Router  from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../src/Context/ApiContext';
import styles from "../../styles/newMember.module.css";


function manage() {
    const context = useContext(AppContext)
    const a = [...new Set(context.members)]
    const [edit, setedit] = useState(false)
    const [Nulvalue, setNulvalue] = useState()


    const handleEditId = (e, key) => {
      context.handleEdit(e)
      Router.push({
        pathname: "../logged_in/edit",
      });
    }

    const handleProfile = (e, key) => {
      context.handleProfile(e,key)
      Router.push({
        pathname: "../logged_in/",
      });
      context.HandleShowProfileDetails();
    }

    useEffect(() => {
      const nul = a.filter((n) => n!=  null || '' || undefined)
      setNulvalue(nul)
    }, [])

  return (<>
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
    <div className={styles.cardContainerItem}>
      <h1>Who's watching?</h1>
      <div className={styles.cardContainerItem} style={{display:"flex"}}>
      {edit ? Nulvalue?.slice(0,4).map((e, key) => {
            return (
              <>
                <li className={styles.listStyleFlex} key={key} onClick={() => handleEditId(e, key)}>
                  <Image
                    src={`https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-${
                      key + 1
                    }.png`}
                    width={150}
                    height={150}
                    style={{ marginRight: "10px", position: "relative", opacity :"0.2"}}
                    alt="test"
                  />
                  <Image
                  src={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyNyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNGMkY0RjYiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjEuMDgyIDEuODc1IDEuODc1IDE5Ljk1OHY1LjE2N2g1LjE2N0wyNi40MTcgNy4xNTl6Ii8+PHBhdGggZD0ibTE3LjM3NSA3LjA0MiAzLjg3NSAzLjg3NSIvPjwvZz48L3N2Zz4=`}
                    width={30}
                    height={30}
                    style={{ marginRight: "10px", position: "absolute",marginLeft: "60px", marginTop:"60px" }}
                    alt="test" 
                    />
                  
                  <h3 style={{ marginTop: "10px",textAlign: "center", fontSize: "15px" }}>{e}</h3>
                </li>
              </>
            );
          }) : Nulvalue?.slice(0,4).map((e, key) => {
            return (
              <>
                <li className={styles.listStyleFlex} key={key} onClick={() => handleProfile(e, key+1)}>
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
            <Image
              src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png"
              width={150}
              height={150}
              style={{ marginRight: "10px" }}
              alt="test"
              priority="true"
            />
            <h3 style={{textAlign: "center", marginTop: "5px", fontSize: "15px" }}>Kids</h3>
          </li>
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
      <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
            <button className={styles.cancel} onClick={() => setedit(!edit)}>{edit ? "Done" : "Edit profile"}</button>

          </div>
   </div>
   </div>
   </>
  )
}

export default manage