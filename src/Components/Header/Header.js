import { useContext } from 'react';
import { AppContext } from '../../Context/ApiContext';
import styles from './header.module.css'
import HeaderItems from './HeaderItems';
import SignInHeader from './SignInHeader';


const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
       <HeaderItems />
       <SignInHeader />
    </div>
  )
}

export default Header