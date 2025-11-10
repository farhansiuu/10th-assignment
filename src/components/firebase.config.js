// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5pYYuVDCKzsBM1pYXRz7br71My4Zehx0",
  authDomain: "pet-care-d7f52.firebaseapp.com",
  projectId: "pet-care-d7f52",
  storageBucket: "pet-care-d7f52.firebasestorage.app",
  messagingSenderId: "608571030295",
  appId: "1:608571030295:web:00b27f4b4d904c0905d552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);