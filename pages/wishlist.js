import React, { useContext, useEffect, useState } from "react";
import Header from "../src/Components/Header/Header";
import Purchase from "../src/Components/wishlist/Purchase";
import { AppContext } from "../src/Context/ApiContext";
import styles from "../styles/wishlist.module.css";
import Router from "next/router";

function wishlist() {
  const context = useContext(AppContext);
  const [title, settitle] = useState("Watchlist");
  const [colorWishlist, setColorW] = useState("#fff");
  const [colorpurchase, setColorP] = useState("#8197a4");


  const handleItem = (a) => {
    settitle(a);
  };
  useEffect(() => {
    if (title === "Watchlist") {
      setColorW("#fff");
      setColorP("#8197a4");
    } else {
      setColorP("#fff");
      setColorW("#8197a4");
    }
  }, [title, colorWishlist, colorpurchase, context.wishlist]);

  const handleClick = (e) => {
    Router.push({
      pathname: "../logged_in/playMovie",
      query: context.wishlist[e],
    });
  };

  const handleRemoveWish = (key) => {
    context.HandleRemoveWishlist(key);
  };

  return (
    <>
      <Header />
      <div className={styles.head_container}>
        <h1
          style={{ color: colorWishlist }}
          onClick={() => handleItem("Watchlist")}
        >
          Watchlist
        </h1>
        <h1
          style={{ color: colorpurchase }}
          onClick={() => handleItem("Purchase")}
        >
          Purchases & Rentals
        </h1>
      </div>
      {title === "Watchlist" ? (
        context.wishlist?.length !== 0 ? (
          context.wishlist?.map((e, key) => {
            return (
              <div className={styles.ImageContainer}>
                <div>
                  {e?.linkEmbed !== null ? (
                    <iframe
                      src={`${e?.linkEmbed}?autoplay=1&width=300`}
                      //allow='autoplay'
                      width="400"
                      height="246"
                      allowFullScreen={true}
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      frameBorder="no"
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
                      src="https://cdn-icons-png.flaticon.com/512/762/762096.png"
                      alt="test"
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Purchase
            image={
              "https://m.media-amazon.com/images/G/01/digital/video/empty_list_watchlist_new.png"
            }
            text1={"Your Watchlist is currently empty"}
            text2={
              "Add TV shows and Movies that you want to watch later by clicking Add to Watchlist."
            }
          />
        )
      ) : (
        <Purchase
          image={
            "https://m.media-amazon.com/images/G/01/digital/video/empty_list_watchlist_purchases_new.png"
          }
          text1={"There are no movies in your Purchases & Rentals"}
          text2={
            "  If videos are missing, make sure that you're signed into the correct Amazon account and then refresh this page."
          }
        />
      )}
    </>
  );
}

export default wishlist;
