// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtEV8zwnWpIUsoUQqaXSV5Ix9pmHumLMo",
  authDomain: "red-onion-login-864b5.firebaseapp.com",
  projectId: "red-onion-login-864b5",
  storageBucket: "red-onion-login-864b5.appspot.com",
  messagingSenderId: "122495384378",
  appId: "1:122495384378:web:1a70048feba93af90d6e03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;