// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA87VbjqvkN7YjUM4Mettq4W8Ad9m0RRPs",
  authDomain: "socialmedia-course.firebaseapp.com",
  projectId: "socialmedia-course",
  storageBucket: "socialmedia-course.appspot.com",
  messagingSenderId: "531753271961",
  appId: "1:531753271961:web:dcbdb481377d151ade6e08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
