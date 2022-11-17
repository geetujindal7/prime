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
      <div onMouseEnter={() => handleMouseOver()}
      onMouseLeave={() => handleMouseOut()}
      key={key} className={styles.ImageContainer}>
        <img  className={styles.imgStyle} src={data.thumbnailUrl} alt="" />

        </div>
  )
}

export default WishlistComp