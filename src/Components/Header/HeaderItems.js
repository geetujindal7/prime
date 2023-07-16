import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { AppContext } from "../../Context/ApiContext";

const HeaderItems = () => {

    const context = useContext(AppContext)
    const handleMouseOver = () => {
        context.HandleShowCategoriesDropdown();
      };


  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div className={styles.Image_logo}>
        <Link href="/logged_in">
          <Image
            width="70"
            height="30"
            src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
            alt="test"
          />
        </Link>
      </div>

      <ul className={styles.header_list}>
        <Link href="/logged_in">
          <li>Home</li>
        </Link>
        <li>Store</li>
        <li>Channels</li>
        <li onMouseEnter={handleMouseOver} onClick={() => context.HandleShowCategoriesDropdown()}>
          Categories
        </li>
        <Link href="/wishlist">
          <li>My Stuff</li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderItems;
