import { useState, useEffect } from 'react'
import Firebase from '../../firebase/clientApp';

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  emailVerified: user.emailVerified
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const Clear = () => {
    setAuthUser(null);
    setLoading(true);
  };
  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);    
    setLoading(false);
  };

  const signInWithEmailAndPassword = (email, password) =>
  Firebase.auth().signInWithEmailAndPassword(email, password);

const createUserWithEmailAndPassword = (email, password) =>
  Firebase.auth().createUserWithEmailAndPassword(email, password);

const signOut = () =>
  Firebase.auth().signOut().then(Clear);

  const sendPasswordResetEmail = (email, authUser) =>
  Firebase.auth().sendPasswordResetEmail(email, authUser);

  const sendEmailVerification = () => {
    Firebase.auth().sendEmailVerification();
  }
// listen for Firebase state change
  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
     createUserWithEmailAndPassword,
     signOut,
     sendPasswordResetEmail,
     sendEmailVerification,
  };
}
