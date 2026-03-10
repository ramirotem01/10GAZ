// שימוש בקישורים מלאים (CDN) כדי שהדפדפן יזהה את ה-SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, addDoc, query, where, updateDoc, increment, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBsBic8nsutIzEX_XJp8FV0SG8flUR7GZo",
  authDomain: "gaz-beb61.firebaseapp.com",
  projectId: "gaz-beb61",
  storageBucket: "gaz-beb61.firebasestorage.app",
  messagingSenderId: "574442694292",
  appId: "1:574442694292:web:b3b8a6a564dcccc4773681",
  measurementId: "G-K8LDN4QQSJ"
};

// אתחול Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ייצוא הפונקציות כדי ששאר הדפים יוכלו להשתמש בהן
export { 
    db, auth, signInAnonymously, onAuthStateChanged, 
    collection, doc, setDoc, getDoc, getDocs, addDoc, 
    query, where, updateDoc, increment, serverTimestamp 
};
