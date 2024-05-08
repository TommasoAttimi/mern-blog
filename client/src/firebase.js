// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-36a3f.firebaseapp.com",
  projectId: "mern-blog-36a3f",
  storageBucket: "mern-blog-36a3f.appspot.com",
  messagingSenderId: "247795589",
  appId: "1:247795589:web:fb096ed5a723bb2fd7beec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
