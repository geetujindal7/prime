import React, { useContext, useState } from 'react'
import  {AppContext}  from '../../../src/Context/ApiContext'
import styles from '../../../styles/wishlist.module.css'
import MouseHover from '../MouseHover'
import MouseHvrWish from './MouseHvrWish'


function WishlistComp({data, key}) {
    console.log(data)


    const [isHover, setisHover] = useState()

    const handleMouseOver = () => {
        setisHover(true);
      };
    
      const handleMouseOut = () => {
        setisHover(false);
      };
    
  return (
     
        <img  className={styles.imgStyle} src={data.thumbnailUrl} alt="test" />

       
  )
}

export default WishlistComp