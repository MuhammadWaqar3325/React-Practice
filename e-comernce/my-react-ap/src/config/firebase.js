// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getFirestore} from "firebase/firestore/lite"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAyiOVL6ry5kcdQ3ffk-YCGy9OV3w4FYp8",
//   authDomain: "bankapp-c8775.firebaseapp.com",
//   projectId: "bankapp-c8775",
//   storageBucket: "bankapp-c8775.appspot.com",
//   messagingSenderId: "16968774269",
//   appId: "1:16968774269:web:d2f3bccd9fb12526067714",
//   measurementId: "G-GNSBCQEN14"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const firestore = getFirestore(app);
// export {firestore};





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyiOVL6ry5kcdQ3ffk-YCGy9OV3w4FYp8",
  authDomain: "bankapp-c8775.firebaseapp.com",
  projectId: "bankapp-c8775",
  storageBucket: "bankapp-c8775.appspot.com",
  messagingSenderId: "16968774269",
  appId: "1:16968774269:web:d2f3bccd9fb12526067714",
  measurementId: "G-GNSBCQEN14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);