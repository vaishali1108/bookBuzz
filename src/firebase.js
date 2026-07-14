// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Fb5n60400fU0RzRLXsQUC7e5RPqqsyw",
  authDomain: "bookbuzz-bf587.firebaseapp.com",
  projectId: "bookbuzz-bf587",
  storageBucket: "bookbuzz-bf587.firebasestorage.app",
  messagingSenderId: "781275056576",
  appId: "1:781275056576:web:08e608e434db3dbf0c6025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);