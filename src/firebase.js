// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3SdPaHRKDUfqAvQo71ivbk4RR2cTvKyY",
  authDomain: "react-portfolio-42519.firebaseapp.com",
  projectId: "react-portfolio-42519",
  storageBucket: "react-portfolio-42519.appspot.com",
  messagingSenderId: "1066140492923",
  appId: "1:1066140492923:web:128201cf8ebd88ed5faede",
  measurementId: "G-1WJZRJVQKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);