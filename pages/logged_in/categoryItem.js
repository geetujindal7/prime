import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import items from '../../src/Components/Common/constant'
import Header from '../../src/Components/Header/Header'
import SearchedResult from '../../src/Components/Searched/SearchedResult'
import { AppContext } from '../../src/Context/ApiContext'
import styles from '../../styles/Search.module.css'

function CategoryItem() {
   const router =  useRouter()
   const {categoriesFilterdData} = useContext(AppContext);

   const query = router.query;
   console.log(categoriesFilterdData, query.item)
  return (
   <div>
       <Header />
       <div className={styles.searchHeader}>
        <p className={styles.ResultText}>
            {query.item}
        </p>
        <button className={styles.refineButton}>Refine</button>
       </div>
       {/* <hr style={{ backgroundColor:"yellow", color: "yellow"}} className={styles.hrStyle}> */}
       <hr style={{height:"0.2px",borderWidth:"0",margin: "0px 32px",  color:"#8197a4", backgroundColor:"#8197a4"}}></hr>
       <div className={styles.images_container}>
      {categoriesFilterdData?.map((e, key) => {
          return (
       // eslint-disable-next-line react/jsx-key
       <SearchedResult data={e} index = {key} />
          )})
      }
   </div>
   </div>
  )
}

export default CategoryItem