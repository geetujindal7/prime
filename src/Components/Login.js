import Image from "next/image";
import styles from "../../styles/login.module.css";
import Footer from "./Common/Footer";
import Popups from "./Common/Popup";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthUserContext";
import { useRouter } from "next/router";
import Link from 'next/link';


function getStorageValue(key, defaultValue) {
  // getting stored value
  if(typeof window !== 'undefined')
  {
  const saved = sessionStorage.getItem('login');
  const initial = JSON.parse(saved);
  return initial || defaultValue;
  }
}
const Login = () => {


  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorFound, setError] = useState();
  const [login, setLogin] = useState(() => {
    return getStorageValue('login', false);
  });

  const { authUser, loading } = useAuth();
  const router = useRouter();
  const { signInWithEmailAndPassword, sendPasswordResetEmail } = useAuth();

  const handleReset = (e) => {
    e.preventDefault()
   if(email)
   {
    sendPasswordResetEmail(email).then(() => {
      alert("Please check your mail to reset your password")
      setError("")
    }).catch((error) => {
      console.log(error.message)
    })
   }
   else{
     setError("Please  enter your email")
   }
  }

  const loginHandler = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(email, password)
    .then(userData => {
      userData.user.sendEmailVerification();      
      if(userData.user.emailVerified)
      {   
        setLogin(true)
         router.push('/logged_in')
      }
      else{
        alert("Please verify your email")
      }
    })
    .catch(error => {
      setError(error.message)
    });
      
  }

  useEffect(() => {
    if (!loading && !authUser)
    {
      setLogin(false)
      router.push('/')
    }
    else if(login){
      router.push('/logged_in')
    }
    sessionStorage.setItem('login', JSON.stringify(login));
  }, [authUser, loading, login])


  return (
    <form onSubmit={loginHandler} className={styles.Sign_In_container}>
      <div className={styles.PrimeImage}>
        <Image
          width="150"
          height="47"
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
        />
      </div>
      {errorFound && (
      <div className={styles.Problem}>
        <p className={styles.ProblemText}>
          There was a Problem
        </p>
        {errorFound}
      </div>
    )}
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
        <input id="Email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} className={styles.input_signIn}></input>
       <div style={{display: "flex", justifyContent: "space-between"}}>
       <label for="password" className={styles.label_signin}>
          Password
        </label>
        <p onClick={handleReset} className={styles.ResetPassword}>Forgot your Password?</p>
       </div>
        <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} className={styles.input_signIn}></input>

        <button type="submit" className={styles.signInButton}>Sign in</button>
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
        <button  className={styles.createAccount}>
        <Link href="/register">Create your Amazon account</Link>
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
