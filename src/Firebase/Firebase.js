// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuNrBq-YNWs17e0FFqwBlAhCiKuaDwiug",
  authDomain: "radiohub-f7cb5.firebaseapp.com",
  projectId: "radiohub-f7cb5",
  storageBucket: "radiohub-f7cb5.appspot.com",
  messagingSenderId: "146642250340",
  appId: "1:146642250340:web:9a9b83b22767feabd40d71",
  measurementId: "G-DD7KNBRS63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
