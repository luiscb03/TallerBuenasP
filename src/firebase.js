// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuPNDrGlnxTubBLvJZp5r9vtzWVLMCIn0",
  authDomain: "buenaspracticas-ef936.firebaseapp.com",
  projectId: "buenaspracticas-ef936",
  storageBucket: "buenaspracticas-ef936.appspot.com",
  messagingSenderId: "56748916751",
  appId: "1:56748916751:web:c8504bd6781489f6ca637a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}