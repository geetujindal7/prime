import styles from './header.module.css'
import Image from "next/image";
import Link from 'next/link';


const HeaderItems = () => {
  return (
      <div style={{
          display: "flex"
      }}>
   <Link href="/logged_in"> <div className={styles.Image_logo}>
         <Image 
          width="120"
          height="40"
          src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
          alt="test"
        />
    </div></Link>
    <ul className={styles.header_list}>
  <Link href="/">
  <Link href="/logged_in"><li>Home</li></Link>
  </Link>
    <li>Store</li>
    <li>Channels</li>
    <li>Categories</li>
    <Link href="/wishlist"><li >My Stuff</li></Link>
    </ul>
    </div>
  )
}

export default HeaderItems