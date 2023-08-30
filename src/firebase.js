import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {    
    apiKey: "AIzaSyCpqXzB6Yzinq4DZY317s-bKWBWpxoMaKo",
    authDomain: "clone-209b3.firebaseapp.com",
    projectId: "clone-209b3",
    storageBucket: "clone-209b3.appspot.com",
    messagingSenderId: "901032392683",
    appId: "1:901032392683:web:f802dfe801c472b3648bae",
    measurementId: "G-N2DL3QEKRF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };