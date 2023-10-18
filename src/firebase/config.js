import firebase from "firebase"
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC4Fihc8RZ5P0_mjytQ_GtnAAQlsKqjxag",
  authDomain: "olx-app-699fd.firebaseapp.com",
  projectId: "olx-app-699fd",
  storageBucket: "olx-app-699fd.appspot.com",
  messagingSenderId: "1054894068201",
  appId: "1:1054894068201:web:b002822c1a767e48623b78",
  measurementId: "G-W270L6WZCX",
};
export const Firebase = firebase.initializeApp(firebaseConfig);