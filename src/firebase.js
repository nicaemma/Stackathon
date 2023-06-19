/* 
*
PUT IN ENV FILE BEFORE DEPLOYING 
*
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

//Auth
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqg-G4enp70cM_FOthKfEn0rZZtgt9cEU",
  authDomain: "stackathon-68512.firebaseapp.com",
  projectId: "stackathon-68512",
  storageBucket: "stackathon-68512.appspot.com",
  messagingSenderId: "331434438985",
  appId: "1:331434438985:web:8a1a0a249d795972e32a98",
  measurementId: "G-N0RKKB5GC8",
};

// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

// collection ref
export const collectionRef = collection(db, "coping-skills");
