// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:String(import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain:String(import.meta.env.VITE_FIREBASE_AUTH_URL),
  projectId:String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
  storageBucket:String(import.meta.env.VITE_FIREBASE_BUCKET_ID),
  messagingSenderId:String(import.meta.env.VITE_FIREBASE_SENDER_ID),
  appId:String(import.meta.env.VITE_FIREBASE_APP_ID),
};

// Initialize Firebasea
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}