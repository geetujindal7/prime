import Image from "next/image";
import React, { useContext } from "react";
import styles from "../../../styles/SignOut.module.css";
import { useAuth } from "../../../src/Context/AuthUserContext";
import { useRouter } from "next/router";
import { AppContext } from "../../Context/ApiContext";
import Link from "next/link";

function SignOut() {
  const { authUser, signOut } = useAuth();
  const router = useRouter();
  const context = useContext(AppContext);
  const a = [...new Set(context.members)];
  const nul = a.filter((n) => n != null || "" || undefined);

  const handleSignOut = () => {
    signOut();
    context.setLogin(false);
    router.push("/");
    context.HandleShowProfileDetails();
  };

  const handleProfile = (e, key) => {
    context.handleProfile(e, key);
    context.HandleShowProfileDetails();
  };
  const current = new Date();
  return (
    <ul className={styles.SignOutContainer}>
      <div style={{ width: "200px" }}>
        <span>
          <li className={styles.listStyle}>Account and Settings</li>
          <li className={styles.listStyle}>Watch Anywhere</li>
          <Link href="https://www.primevideo.com/help/ref=atv_nb_hp">
            {" "}
            <li className={styles.listStyle}>Help</li>
          </Link>
          <li className={styles.listStyle} onClick={handleSignOut}>
            Not {authUser?.displayName}? Sign Out
          </li>
        </span>
      </div>
      <hr style={{ color: "#414c53", backgroundColor: "#414c53" }}></hr>
      <div style={{ width: "200px" }}>
        <span>
          {nul.slice(0, 4).map((e, key) => {
            return (
              <>
                <div key={current}>
                  <li
                    className={styles.listStyleFlex}
                    key={key}
                    onClick={() => handleProfile(e, key + 1)}
                  >
                    <Image
                      src={`https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-${
                        key + 1
                      }.png`}
                      width={32}
                      height={32}
                      style={{ marginRight: "10px" }}
                      alt="test"
                      key={current}
                    />
                    <h3
                      style={{ marginTop: "5px", fontSize: "15px" }}
                    >
                      {e}
                    </h3>
                  </li>
                </div>
              </>
            );
          })}
          <li className={styles.listStyleFlex}>
            <Image
              src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png"
              width={32}
              height={32}
              style={{ marginRight: "10px" }}
              alt="test"
            />
            <h3 style={{ marginTop: "5px", fontSize: "15px" }}>Kids</h3>
          </li>
          <li className={styles.listStyleFlex}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRjJGNEY2IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMSAxMGgxOE0xMCAxOVYxIi8+PC9nPjwvc3ZnPg=="
              width={30}
              height={30}
              style={{
                marginRight: "10px",
                backgroundColor: "#425265",
                backgroundPosition: "50%",
                backgroundSize: "12px",
                borderRadius: "50%",
                padding: "7px",
              }}
              alt="test"
            />
            <Link href="logged_in/associate">
              <h3 style={{ marginTop: "5px", fontSize: "15px" }}>Add New</h3>
            </Link>
          </li>
          <Link href="logged_in/manage">
            <li className={styles.listStyle}>Manage Profiles</li>
          </Link>
          <li className={styles.listStyle}>Learn More</li>
        </span>
      </div>
    </ul>
  );
}

export default SignOut;
