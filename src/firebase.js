// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTf9mC1fmlhOQ6SSFKo1GSnuL7SW-MSfA",
  authDomain: "realtor-clone-8679a.firebaseapp.com",
  projectId: "realtor-clone-8679a",
  storageBucket: "realtor-clone-8679a.appspot.com",
  messagingSenderId: "958163171990",
  appId: "1:958163171990:web:6a590f4ef7a7802819e0b7",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
