import Image from "next/image";
import styles from "../../styles/login.module.css";
import Footer from "./Common/Footer";
import Popups from "./Common/Popup";

const Login = () => {
  return (
    <form className={styles.Sign_In_container}>
      <div className={styles.PrimeImage}>
        <Image
          width="150"
          height="47"
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
        />
      </div>
      <div className={styles.SignInCard}>
        <h1
          style={{
            fontWeight: "400",
            fontSize: "28px",
            lineHeight: "1.2",
            marginBottom: "10px",
          }}
        >
          Sign in
        </h1>
        <label for="Email" className={styles.label_signin}>
          Email or mobile phone number
        </label>
        <input id="Email" className={styles.input_signIn}></input>
        <label for="password" className={styles.label_signin}>
          Password
        </label>
        <input id="password" className={styles.input_signIn}></input>

        <button className={styles.signInButton}>Sign in</button>
        <p>
          By continuing, you agree to the Amazon Conditions of Use and Privacy
          Notice.
        </p>
        <div className={styles.PrimeImage}>
          <input type="checkbox"></input>
          <p
            style={{
              marginLeft: "10px",
            }}
          >
            Keep me signed in.
          </p>
          <Popups />
        </div>
        <div className={styles.a}>
          <h5>New to Amazon? </h5>
        </div>
        <button className={styles.createAccount}>
          Create your Amazon account
        </button>
      </div>
      <hr
        style={{
          marginTop: "20px",
          color: "linear-gradient(to bottom,#f7f8fa,#e7e9ec)",
          width: "80%",
          opacity: "0.25",
        }}
      ></hr>
      <Footer />
    </form>
  );
};

export default Login;
