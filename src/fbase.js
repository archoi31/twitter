// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKqF-ZfxDk_ijKRLm7DvMW8QFanuyX-rM",
  authDomain: "twitter-b9c5a.firebaseapp.com",
  projectId: "twitter-b9c5a",
  storageBucket: "twitter-b9c5a.appspot.com",
  messagingSenderId: "1014426284440",
  appId: "1:1014426284440:web:8e33fd00a95c04239c3bed"
  
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default getAuth(app);