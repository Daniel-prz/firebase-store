// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArtwv1nQADwaIp731djgUkrmoz7gIjc0o",
  authDomain: "fir-store-31c6f.firebaseapp.com",
  projectId: "fir-store-31c6f",
  storageBucket: "fir-store-31c6f.appspot.com",
  messagingSenderId: "917251482315",
  appId: "1:917251482315:web:a0afce5919ce5e44a7b14e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
