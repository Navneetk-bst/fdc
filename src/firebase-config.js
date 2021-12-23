// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore" ; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8WYdadM3B1-fsb-kUaIKUhQdLJfCXK88",
  authDomain: "bluestacks-fdc.firebaseapp.com",
  projectId: "bluestacks-fdc",
  storageBucket: "bluestacks-fdc.appspot.com",
  messagingSenderId: "703547175556",
  appId: "1:703547175556:web:342f7238253296a22008d1",
  measurementId: "G-ZYFKTQ4KDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) ; 