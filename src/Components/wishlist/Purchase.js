import React from 'react'

function Purchase() {
  return (
    <>
    <div style={{
      margin: "50px auto",
      display: "flex",
      alignItems:"center", 
      justifyContent: "center"
    }}>
      <img style={{width:"217px", height: "217px"}} src="https://m.media-amazon.com/images/G/01/digital/video/empty_list_watchlist_purchases_new.png" alt="test" />
    </div>
    <h3 style={{
      margin: "auto",
      textAlign: "center",
      fontWeight: "700",
    fontSize: "17px",
    color: "#fff"
}}
    >
    There are no movies in your Purchases & Rentals
    </h3>
    <h3 style={{
      margin: "auto",
      textAlign: "center",
      fontWeight: "700",
    fontSize: "17px",
    color: "#8197a4"
}}>
    If videos are missing, make sure that you're signed into the correct Amazon account and then refresh this page.
    </h3>
    </>
  )
}

export default Purchase
