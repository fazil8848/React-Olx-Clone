import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBbDiXrFN5CzOME6Pump9pvvUG4D01Ztlg",
    authDomain: "olxclone-7692b.firebaseapp.com",
    projectId: "olxclone-7692b",
    storageBucket: "olxclone-7692b.appspot.com",
    messagingSenderId: "937103959682",
    appId: "1:937103959682:web:a052fb3c05d6b76ab0b69b",
    measurementId: "G-G1TQTD3STH"
};

export default firebase.initializeApp(firebaseConfig);