import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDY46jRW3d0JrrTNJuDBrJhzKaLA0dAODY",
  authDomain: "lcdo-f6edd.firebaseapp.com",
  projectId: "lcdo-f6edd",
  storageBucket: "lcdo-f6edd.appspot.com",
  messagingSenderId: "52797596254",
  appId: "1:52797596254:web:e3054a427f19dc5f9a0acf",
  measurementId: "G-KBL3THYPTR",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export  const db = getFirestore(app);
