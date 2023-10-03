// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKNt7fuwmOwhsJOBy3GWnpOJYxr0sQuFA",
  authDomain: "fir-recap-by-moha-milon.firebaseapp.com",
  projectId: "fir-recap-by-moha-milon",
  storageBucket: "fir-recap-by-moha-milon.appspot.com",
  messagingSenderId: "695986413619",
  appId: "1:695986413619:web:5bec12265510b54cd74346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;