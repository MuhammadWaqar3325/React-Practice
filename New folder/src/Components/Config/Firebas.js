// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6VXRVr30rB0W1svf2KWss206UzcHEu08",
  authDomain: "fastservice-45ac8.firebaseapp.com",
  projectId: "fastservice-45ac8",
  storageBucket: "fastservice-45ac8.appspot.com",
  messagingSenderId: "719586021804",
  appId: "1:719586021804:web:c0ab70966c6aa9804c2a09",
  measurementId: "G-1VV9XVN2WB"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
export { auth, storage, firestore };