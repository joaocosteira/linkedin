import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFCfXEvrrbOzOzpXBdfXXdxJP8uWl1DhY",
    authDomain: "linkedin-db2b3.firebaseapp.com",
    projectId: "linkedin-db2b3",
    storageBucket: "linkedin-db2b3.appspot.com",
    messagingSenderId: "234310297161",
    appId: "1:234310297161:web:7339bbd8027c3b029cc198"
  };

const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);
const auth = getAuth(app);

export { db,auth };