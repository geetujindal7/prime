/* eslint-disable react/no-unescaped-entities */
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from  '../../../styles/popup.module.css'

function Popups() {
  return (
    <Popup contentStyle={{width: "400px", height: "150px", boxSizing: "border-box", margin: "0", padding: "0"}}trigger={<p style={{
        marginLeft:"5px",
        color: "#0066c0"
    }}> Details </p>} position="top">
    <div>
      <div className={styles.container_keepME}>
      <p className={styles.keepMeSignedLabel}>"Keep Me Signed In" Checkbox</p>
      <p className={styles.closeButton}>x</p>
      </div>
      <div>
        <p className={styles.Inside_Label}>
        Choosing "Keep me signed in" reduces the number of times you're
         asked to Sign-In on this device.
        </p>
        <p className={styles.Inside_Label}>
        To keep your account secure, use this option only on your personal devices.
        </p>
      </div>
    </div>
  </Popup>
  )
}

export default Popups