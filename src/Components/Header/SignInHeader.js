import { useState } from 'react'
import styles from './header.module.css'

function SignInHeader() {
    const [searchIcon, setSearchIcon] = useState(false)

  return (
    <div style={{
    display: "flex",
    padding:"10px"        
    }}>
       {/* <div className={styles.search_field}>
    <input name="q" />
    <button type="submit"><img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png" alt="Search" width={32} height={32}/></button>
</div> */}

{searchIcon && <input className={styles.searchIcon} placeholder="Search" type="text"/>}
<img className= {searchIcon ? styles.icons : styles.icon} onClick={() => setSearchIcon(!searchIcon)} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png" alt="" width={40} height={40}/>     
    </div>

  )
}

export default SignInHeader