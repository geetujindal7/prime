import React, { useContext, useEffect, useState } from 'react'
import Header from '../src/Components/Header/Header'
import Purchase from '../src/Components/wishlist/Purchase'
import WishlistComp from '../src/Components/wishlist/wishlistComp'
import { AppContext } from '../src/Context/ApiContext'
import styles from '../styles/wishlist.module.css'
import Router from 'next/router'


function wishlist() {
    const context = useContext(AppContext)
    const [title, settitle] = useState("Watchlist")
    const [colorWishlist, setColorW] = useState("#fff")
    const [colorpurchase, setColorP] = useState("#8197a4")

    console.log(context.wishlist)


    const handleItem = (a) => {
      settitle(a) 
   
}
    useEffect(() => {
      if(title === "Watchlist")
      {
        setColorW("#fff")
        setColorP("#8197a4")
      }
      else{ 
        setColorP("#fff")
        setColorW("#8197a4")
      }
    }, [title, colorWishlist, colorpurchase, context.wishlist])

    useEffect(() => {

    },[context.wishlist])

    const handleClick = (e) => {
      Router.push({
          pathname: '../logged_in/playMovie',
          query: context.wishlist[e],
      });
    }

    const handleRemoveWish = (key) => {
        context.HandleRemoveWishlist(key)
    }
  

  return (
      <>
    <Header />
    <div className={styles.head_container}>
        <h1 style={{color: colorWishlist}} onClick={() => handleItem("Watchlist")}>Watchlist</h1>
        <h1 style={{color: colorpurchase}} onClick={() => handleItem("Purchase")}>Purchases & Rentals</h1>
    </div>
    {
      title === "Watchlist" ? (context.wishlist?.map((e, key) => {
        console.log(e)
        return(
          <div className={styles.ImageContainer}>
          <div>
          {e?.linkEmbed !== null ? (
          <iframe
            src={`${e?.linkEmbed}?autoplay=1&width=300`}
            //allow='autoplay'
            width="400"
            height="246"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            frameborder="no"
            scrolling="no"
          ></iframe>
        ) : (
          <div>
            <img
              className={styles.imgStyle}
              src={e?.thumbnailUrl}
              alt="test"
            />
          </div>
        )}
        <div className={styles.PlayContainer}>
          
          <img
          onClick={(event) => handleClick(key)}
            className={styles.playImage}
            src="https://www.freepnglogos.com/uploads/play-button-png/index-media-cover-art-play-button-overlay-5.png"
            alt="test"
          />
          <img
            onClick={() => handleRemoveWish(e.imDbId)}
            title="Remove from Wishlist"
            className={styles.play_icon_style}
            src="https://as1.ftcdn.net/v2/jpg/02/54/78/56/1000_F_254785625_fS7Ma2s8tMv40qdEQhv3WMPkc0cw20uX.jpg"
            alt="test"
          />
        </div>
          </div>
          </div>
        )
      })) : <Purchase />
    }
    </>
  )
}

export default wishlist