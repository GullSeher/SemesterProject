

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore'; 
// import { getStorage } from "firebase/storage";

// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBYtVoO13QtSDhnSDXI7OfB83ox3PDp-oE",
  authDomain: "project-617cb.firebaseapp.com",
  projectId: "project-617cb",
  storageBucket: "project-617cb.appspot.com",
  messagingSenderId: "1093747021590",
  appId: "1:1093747021590:web:c942203d0b011f837a2237",
  measurementId: "G-D9NYTDTYP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 
const storage = getStorage(app);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.firestore();

export { app, auth, db, storage,database };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app); 
// const storage = getStorage(app);

// export { app, auth, db, storage };


