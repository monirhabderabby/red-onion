import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7nVT2yFvEHyrPe05gLVHhftdjlQ4BHdI",
  authDomain: "red-onion-project-deff5.firebaseapp.com",
  projectId: "red-onion-project-deff5",
  storageBucket: "red-onion-project-deff5.appspot.com",
  messagingSenderId: "1085355122552",
  appId: "1:1085355122552:web:56205d977af584761e328d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;