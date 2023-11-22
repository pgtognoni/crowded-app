// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import 'firebase/database';

const { 
    REACT_APP_FIREBASE_APIKEY,
    REACT_APP_FIREBASE_AUTHDOMAIN,
    REACT_APP_FIREBASE_PROJECTID,
    REACT_APP_FIREBASE_STORAGEBUCKET,
    REACT_APP_FIREBASE_MESSAGINGSENDERID,
    REACT_APP_FIREBASE_APPID,
    REACT_APP_MEASUREMENTID } = process.env;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECTID,
  storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: REACT_APP_FIREBASE_APPID, 
  measurementId: REACT_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);


