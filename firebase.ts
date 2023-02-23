// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARxmwEnoi8haB5dAZoOuFJOXIzrDkEGbc",
  authDomain: "chatgpt-clone-74dc2.firebaseapp.com",
  projectId: "chatgpt-clone-74dc2",
  storageBucket: "chatgpt-clone-74dc2.appspot.com",
  messagingSenderId: "435597795009",
  appId: "1:435597795009:web:6b22ceb47f87264668be40",
  measurementId: "G-PJK94XP8C3"
};


// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
