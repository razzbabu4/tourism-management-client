// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI18YvSpaymvUWwGRu9CYlzogaSmGufxA",
  authDomain: "tourism-management-bd08e.firebaseapp.com",
  projectId: "tourism-management-bd08e",
  storageBucket: "tourism-management-bd08e.appspot.com",
  messagingSenderId: "707276575595",
  appId: "1:707276575595:web:bbc119cacc32ba196c322e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)