// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWrYOAkogpzlY9YQAztePer57ZJXuPfH0",
  authDomain: "tutorial-14929.firebaseapp.com",
  projectId: "tutorial-14929",
  storageBucket: "tutorial-14929.appspot.com",
  messagingSenderId: "424236976540",
  appId: "1:424236976540:web:9e2c1fecd89a474ed0a059",
  measurementId: "G-0R3K67R2J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);