import React, { useContext, useEffect, useState } from 'react'
import Header from '../src/Components/Header/Header'
import Purchase from '../src/Components/wishlist/Purchase'
import WishlistComp from '../src/Components/wishlist/wishlistComp'
import { AppContext } from '../src/Context/ApiContext'
import styles from '../styles/wishlist.module.css'

function wishlist() {
    const context = useContext(AppContext)
    const [title, settitle] = useState("Watchlist")
    const [colorWishlist, setColorW] = useState("#fff")
    const [colorpurchase, setColorP] = useState("#8197a4")
    const [data, setData] = useState(context.wishlist)

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
    }, [title, colorWishlist, colorpurchase])

    

  return (
      <>
    <Header />
    <div className={styles.head_container}>
        <h1 style={{color: colorWishlist}} onClick={() => handleItem("Watchlist")}>Watchlist</h1>
        <h1 style={{color: colorpurchase}} onClick={() => handleItem("Purchase")}>Purchases & Rentals</h1>
    </div>

    {
      title === "Watchlist" ? (context.wishlist?.map((e, key) => {
        return(
          <WishlistComp data={e} key={key} />
        )
      })) : <Purchase />
    }
    </>
  )
}

export default wishlist