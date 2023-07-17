import Image from "next/image";
import styles from "../styles/login.module.css";
import Footer from "../src/Components/Common/Footer";
import { useEffect, useState } from "react";
import { useAuth } from "../src/Context/AuthUserContext";
import { useRouter } from "next/router";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ReEnterpassword, setReEnterPassword] = useState("");
  const [errorFound, setError] = useState("");

  const { authUser, loading } = useAuth();
  const router = useRouter();
  const { createUserWithEmailAndPassword } = useAuth();

  const registerHandler = (e) => {
      e.preventDefault();
      if(password.length < 6)
      {
        setError("Passwords must be at least 6 characters.")
        return;
      }

      if(password === ReEnterpassword)
      createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.updateProfile({
          displayName: name
       })
               router.push('/')
    })
    .catch(error => {
      setError(error.message)
    });
    else{
      setError("Please enter the same password");
    } 
  }

  useEffect(() => {
  console.log(createUserWithEmailAndPassword)
  }, [createUserWithEmailAndPassword])


  return (
    <>
    <form  className={styles.Sign_In_container}>
      <div className={styles.PrimeImage}>
        <Image
          width="150"
          height="47"
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt="media-amazon.com"
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
          Create Account
        </h1>
        <label htmlFor="Name" className={styles.label_signin}>
          Your Name
        </label>
        <input
          id="Name"
          type="text"
          required
          placeholder="First and Last name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={styles.input_signIn}
        ></input>

        <label htmlFor="Email" className={styles.label_signin}>
          Email
        </label>
        <input
          id="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={styles.input_signIn}
        ></input>
        <label htmlFor="password" className={styles.label_signin}>
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          placeholder="At least 6 characters"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={styles.input_signIn}
        ></input>

        <label htmlFor="Reenterpassword" className={styles.label_signin}>
          Re-enter password
        </label>
        <input
          id="Reenterpassword"
          type="password"
          required
          onChange={(e) => setReEnterPassword(e.target.value)}
          value={ReEnterpassword}
          className={styles.input_signIn}
        ></input>

        <button onClick={() => registerHandler()} className={styles.signInButton}>
          Create your Amazon account
        </button>
        <p>
          By continuing, you agree to the Amazon Conditions of Use and Privacy
          Notice.
        </p>
        <div className={styles.AlreadyAccount}>
          <p style={{ marginRight: "5px" }}>Already have an account? </p>
          <p style={{ color: "#0066c0" }}>
            <Link href="/">Sign In</Link>
          </p>
        </div>
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
    </>
  );
};

export default Register;
