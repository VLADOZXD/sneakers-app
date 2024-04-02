// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNHgF93W_3Xu85tzkAxrLR3ZpXT_dkUfc",
  authDomain: "sneakers-b4cce.firebaseapp.com",
  databaseURL:
    "https://sneakers-b4cce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sneakers-b4cce",
  storageBucket: "sneakers-b4cce.appspot.com",
  messagingSenderId: "542084023755",
  appId: "1:542084023755:web:8d853e2f5e291736b6a24e",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };
