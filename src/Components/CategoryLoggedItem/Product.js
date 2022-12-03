import React, { useEffect, useState } from "react";
import items from "../Common/constant";
import styles from "../../../styles/product.module.css"
import Image from "next/image";

function Product({ title }) {
    const [data, setData] = useState(items)


    useEffect(() => {
        const check = items.filter((e) => e.genres.includes(title));
        console.log(check)
         setData(check)
    }, [])

    const handleItem = (e) => {
        
    }

  return <div style={{ marginTop: "30px" }}>
  <div>{title}</div>
  <div style={{display: "flex",
    scrollBehavior: "scroll",
    margin: "20px 0px 0px 0px",
    overflow: "scroll",}}>
    {
        data?.map((e) => {
            return (
                <div>
                <Image onClick={() => handleItem(e.id)} priority={true} width={350} height={200} className={styles.img_product} src={e.image} alt="" />

                </div>
            )
        }
        )
    }
  </div>
  </div>;
}

export default Product;
