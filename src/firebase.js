import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDTZzPxseTUNuAKfm-VL8Ysg2lLeEFCG8",
  authDomain: "map-app-fa023.firebaseapp.com",
  projectId: "map-app-fa023",
  storageBucket: "map-app-fa023.appspot.com",
  messagingSenderId: "1089121441300",
  appId: "1:1089121441300:web:344247fb07a64e6c497901",
  measurementId: "G-6BBMQ5DDH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }

