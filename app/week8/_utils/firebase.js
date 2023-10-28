// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwobXejmAFkBaYGe74sskeGhoVN3TqavM",
  authDomain: "cprg306-assignments-5f124.firebaseapp.com",
  projectId: "cprg306-assignments-5f124",
  storageBucket: "cprg306-assignments-5f124.appspot.com",
  messagingSenderId: "133193113922",
  appId: "1:133193113922:web:a66a4802f4d3200d1d68db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);