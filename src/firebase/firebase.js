// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgEAEvyHaD6kFSWcRlV-mWScObayN3yTo",
  authDomain: "nadeem-98ac5.firebaseapp.com",
  projectId: "nadeem-98ac5",
  storageBucket: "nadeem-98ac5.appspot.com",
  messagingSenderId: "322303424466",
  appId: "1:322303424466:web:f1e05275a3eed2265c7a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)