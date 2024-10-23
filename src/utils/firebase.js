// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ1xHGy7B-2wKP22B2_bmW_EKDCCh_uu0",
  authDomain: "netlfix-gpt-31939.firebaseapp.com",
  projectId: "netlfix-gpt-31939",
  storageBucket: "netlfix-gpt-31939.appspot.com",
  messagingSenderId: "818514362094",
  appId: "1:818514362094:web:fe38e85ba9b492e76e7dff",
  measurementId: "G-8P2ELFRZLR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
