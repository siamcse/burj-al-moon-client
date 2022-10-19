// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFVVS_bghvHrsO2yl3VfJZg55nH98Pqqk",
  authDomain: "burj-al-moon.firebaseapp.com",
  projectId: "burj-al-moon",
  storageBucket: "burj-al-moon.appspot.com",
  messagingSenderId: "520264245929",
  appId: "1:520264245929:web:abb40d01099867c233ffb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;