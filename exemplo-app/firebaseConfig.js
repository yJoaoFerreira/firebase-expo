import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWrYOAkogpzlY9YQAztePer57ZJXuPfH0",
  authDomain: "tutorial-14929.firebaseapp.com",
  projectId: "tutorial-14929",
  storageBucket: "tutorial-14929.appspot.com",
  messagingSenderId: "424236976540",
  appId: "1:424236976540:web:9e2c1fecd89a474ed0a059",
  measurementId: "G-0R3K67R2J9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);