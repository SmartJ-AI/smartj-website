import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyD_B1_e3zCG1u4GcqHaGii9qlUtTcHbkws",

  authDomain: "smartjh-ai.firebaseapp.com",

  projectId: "smartjh-ai",

  storageBucket: "smartjh-ai.firebasestorage.app",

  messagingSenderId: "577859863512",

  appId: "1:577859863512:web:7d336036f42e464994e8ad",

  measurementId: "G-0N9CV21YV3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
};
