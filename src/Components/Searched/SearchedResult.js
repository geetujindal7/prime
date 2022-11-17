import React, { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Search.module.css";
import { AppContext } from "../../Context/ApiContext";
import MouseHover from "../MouseHover";
import MouseHoverSearched from "./MouseHoverSearched";

function SearchedResult({ data, index }) {
  const context = useContext(AppContext);

  const [isHover, setisHover] = useState();

  const handleMouseOver = () => {
    setisHover(true);
  };

  const handleMouseOut = () => {
    setisHover(false);
  };

  const handlewish = (data) => {
    context.HandleWishlist(data);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        key={index}
        className={styles.card}
      >
        {isHover ? (
          <MouseHoverSearched datas={data} id={data.id} />
        ) : (
          <>
            {data.image.includes("nopicture") ? (
              <img
                className={styles.img_card}
                src="https://www.designbolts.com/wp-content/uploads/2015/12/404-page-not-found-design.jpg"
                alt=""
              />
            ) : (
              <img className={styles.img_card} src={data.image} alt="" />
            )}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div className={styles.titlestyle}>{data.title}</div>

                <div className={styles.year_styles}>
                  <div>{data?.description}</div>
                </div>
              </div>

              <div>
                <img
                  onClick={() => handlewish(data)}
                  title="Add to Wishlist"
                  className={styles.play_icon_style}
                  src="https://www.freeiconspng.com/thumbs/plus-icon/grey-plus-icon-8.png"
                  alt=""
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SearchedResult;
