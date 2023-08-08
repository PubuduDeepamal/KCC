import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ9SIuIdyWZm0k5kUCK_hO4e6gt9-51DU",
  authDomain: "kcccarparkmanagementsysteam.firebaseapp.com",
  databaseURL: "https://kcccarparkmanagementsysteam-default-rtdb.firebaseio.com",
  projectId: "kcccarparkmanagementsysteam",
  storageBucket: "kcccarparkmanagementsysteam.appspot.com",
  messagingSenderId: "217908528265",
  appId: "1:217908528265:web:511684656511ba784ff258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
