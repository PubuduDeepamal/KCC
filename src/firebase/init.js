import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ9SIuIdyWZm0k5kUCK_hO4e6gt9-51DU",
  authDomain: "kcccarparkmanagementsysteam.firebaseapp.com",
  databaseURL: "https://kcccarparkmanagementsysteam-default-rtdb.firebaseio.com",
  projectId: "kcccarparkmanagementsysteam",
  storageBucket: "kcccarparkmanagementsysteam.appspot.com",
  messagingSenderId: "217908528265",
  appId: "1:217908528265:web:511684656511ba784ff258"
};

const firbaseApp = initializeApp(firebaseConfig);

// export default firbaseApp

// init firestore service
const db = getFirestore()
export default db
