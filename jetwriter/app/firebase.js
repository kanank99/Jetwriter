// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmd0TwJK9aLuV-hjvMlU1zKOotv10pywA",
  authDomain: "jetwriter-48530.firebaseapp.com",
  projectId: "jetwriter-48530",
  storageBucket: "jetwriter-48530.appspot.com",
  messagingSenderId: "274390626024",
  appId: "1:274390626024:web:7a6bc5624226a8bc6b235d",
  measurementId: "G-0ZR10NPBEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
// const analytics = getAnalytics(app);