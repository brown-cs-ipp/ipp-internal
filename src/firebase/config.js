// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrCWFNio68wH1Z-ikH8mebOU7Okl5mvys",
  authDomain: "brown-cs-ipp.firebaseapp.com",
  databaseURL: "https://brown-cs-ipp-default-rtdb.firebaseio.com",
  projectId: "brown-cs-ipp",
  storageBucket: "brown-cs-ipp.appspot.com",
  messagingSenderId: "1098132087168",
  appId: "1:1098132087168:web:a6f0f95de18b689f1ca165",
  measurementId: "G-SF6WEXFNZ4"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
