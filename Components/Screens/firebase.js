import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
const Config = {
    apiKey: "AIzaSyD2NJcpb7-Wz7JsKRDT5BFaRAzK_f3Aagg",
    authDomain: "lovers-517db.firebaseapp.com",
    projectId: "lovers-517db",
    storageBucket: "lovers-517db.appspot.com",
    messagingSenderId: "463133428169",
    appId: "1:463133428169:web:988b4c07581a922ae64018",
    measurementId: "G-V2C7VL1QXM"
};
// Initialize Firebase
firebase.initializeApp(Config);
const db = firebase.database();
const _db =firebase.firestore();
const auth = firebase.auth();
export { db , _db,auth, firebase as default };