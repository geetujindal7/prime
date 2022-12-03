import React, { useContext, useEffect, useState } from "react";
import styles from "../../../styles/CategoriesDropdown.module.css";
import { useAuth } from "../../../src/Context/AuthUserContext";
import { useRouter } from "next/router";
import { AppContext } from "../../Context/ApiContext";
import Link from "next/link";
import Router from "next/router";
import items from "./constant";

function Categories() {
  const [genre, setgenre] = useState([]);

  const context = useContext(AppContext);

  const data = [
    {
      title: "Included with Prime",
      image: "Included-With-Prime",
    },
    {
      title: "Amazon Originals",
      image: "Amazon-Originals",
    },
    {
      title: "Movies",
      image: "Movies",
    },
    {
      title: "TV",
      image: "TV-Shows",
    },
    {
      title: "Kids",
      image: "Included-With-Prime",
    },
  ];

  const handleItem = (item) => {
    const check = items.filter((e) => e.genres.includes(item));
    context.handlecategoriesFilterdData(check);
    context.HandleShowCategoriesDropdown();
    Router.push({
      pathname: "/logged_in/categoryItem",
      query: {
        item: item,
      },
    });
  };
  useEffect(() => {
    // const data = [...new Set(setgenre)]
    const dat = items?.map((item) => item.genres);
    const b = dat.join(",");
    const arr = b.split(",");
    const aa = [...new Set(arr)];
    const ab = aa.join(",");
    const aaa = ab.split(",");
    setgenre(aaa);
  }, []);

  const current = new Date();
  return (
    <ul className={styles.CategoriesContainer}>
      <div
        style={{ width: "50vw", height: "400px", backgroundColor: "#0f171e" }}
      >
        <span>
          <div
            style={{
              padding: "40px 0px 10px 110px",
              color: "#fff",
              fontSize: "17px",
            }}
          >
            Top Categories
          </div>
          <ul
            style={{
              marginLeft: "90px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {data.map((e, key) => (
                <div
                  key={key}
                  style={{
                    backgroundImage: `url(https://m.media-amazon.com/images/G/01/digital/video/web_cats/${e.image}.png)`,
                  }}
                  className={styles.dd}
                >
                  <p
                    style={{
                      marginTop: "40px",
                      textAlign: "center",
                      color: "#f2f4f6",
                      fontSize: "15px",
                      lineHeight: "21px",
                    }}
                  >
                    {e.title}
                  </p>
                </div>
              ))}
            </div>
          </ul>
        </span>
      </div>
      <hr
        style={{
          color: "grey",
          backgroundColor: "grey",
        }}
      ></hr>
      <div
        style={{ width: "50vw", height: "400px", backgroundColor: "#0f171e" }}
      >
        <span>
          <div
            style={{
              padding: "40px 0px 10px 20px",
              color: "#fff",
              fontSize: "17px",
            }}
          >
            Other Categories
          </div>
          <ul className={styles.otherCate}>
            {genre.map((e, key) => (
              <li onClick={() => handleItem(e)} key={key}>
                {e}
              </li>
            ))}
          </ul>
        </span>
      </div>
    </ul>
  );
}

export default Categories;
