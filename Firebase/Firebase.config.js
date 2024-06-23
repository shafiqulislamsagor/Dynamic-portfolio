// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcRw-u2PvVWvX6zy5wb9ZoJK35Hem5IvQ",
  authDomain: "dynamic-portfolio-acaba.firebaseapp.com",
  projectId: "dynamic-portfolio-acaba",
  storageBucket: "dynamic-portfolio-acaba.appspot.com",
  messagingSenderId: "518300968581",
  appId: "1:518300968581:web:056495cf6ba1e4487b2bec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;