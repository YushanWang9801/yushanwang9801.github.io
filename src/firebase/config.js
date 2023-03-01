import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

import "firebase/compat/database";
import { doc, deleteDoc } from "firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmanUTKh-TRQ2FRS7EZKdw0tL9fz2Y67M",
    authDomain: "portfolio-d5d1f.firebaseapp.com",
    projectId: "portfolio-d5d1f",
    storageBucket: "portfolio-d5d1f.appspot.com",
    messagingSenderId: "975802359554",
    appId: "1:975802359554:web:aa4133ef817d1be5ddac1b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const projectDatabase = firebase.database();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, projectDatabase, 
        timestamp, doc, deleteDoc};