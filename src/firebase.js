// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABoGPXqyglCe1CzJ_OTNXgAk6azmJ1ISc",
  authDomain: "pemastik.firebaseapp.com",
  projectId: "pemastik",
  storageBucket: "pemastik.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "95037257603",
  appId: "1:95037257603:web:88957a274015d01b0d68b6",
  measurementId: "G-V638HY43T9", // Optional, remove if unused
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); // Export Firestore instance
