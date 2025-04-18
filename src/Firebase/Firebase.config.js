// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPFbkSTZQMHLlb8HkMl70-pt31mOBQksE",
  authDomain: "dragon-news-c4d23.firebaseapp.com",
  projectId: "dragon-news-c4d23",
  storageBucket: "dragon-news-c4d23.firebasestorage.app",
  messagingSenderId: "708547882429",
  appId: "1:708547882429:web:6feeaccbaf15e1e581f6d4",
  measurementId: "G-2ZG1NDHC3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;