// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import 'firebase/database';

const { 
    REACT_APP_FIREBASE_APIKEY,
    REACT_APP_DATABASE_URL,
    REACT_APP_FIREBASE_MESSAGINGSENDERID,
    REACT_APP_FIREBASE_APPID,
    REACT_APP_MEASUREMENTID } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: "crowded-bands.firebaseapp.com",
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: "crowded-bands",
  storageBucket: "crowded-bands.appspot.com",
  messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: REACT_APP_FIREBASE_APPID,
  measurementId: REACT_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);


