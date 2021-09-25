import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBow72Zb5JtEjIu4T6vHBk0cXqcL1xENsw",
  authDomain: "onlion-db.firebaseapp.com",
  projectId: "onlion-db",
  storageBucket: "onlion-db.appspot.com",
  messagingSenderId: "654499595388",
  appId: "1:654499595388:web:4e0263d36c5a137db475f9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
