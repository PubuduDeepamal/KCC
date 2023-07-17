// src/firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore'; // Add the Firebase services you'll be using (e.g., firestore, authentication, etc.)

const firebaseConfig = {
    apiKey: "AIzaSyCxELxwNCXd3YKnHMzzD3c8I4Z-l-mwFso",
    authDomain: "kcccarpark.firebaseapp.com",
    projectId: "kcccarpark",
    storageBucket: "kcccarpark.appspot.com",
    messagingSenderId: "228659367130",
    appId: "1:228659367130:web:75f2c130ebe89be4b1e9e3",
    measurementId: "G-KV1VBESRDG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Optionally, you can initialize other Firebase services here, for example:
// const db = firebase.firestore();

export default firebase;
