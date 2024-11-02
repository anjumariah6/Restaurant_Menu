import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7OlyaJRACb9eGOiRHP0X1G664fQjP-KY",
    authDomain: "anju-restaurant.firebaseapp.com",
    projectId: "anju-restaurant",
    storageBucket: "anju-restaurant.appspot.com",
    messagingSenderId: "569571710181",
    appId: "1:569571710181:web:366c7bdf9176ce814a700c",
    measurementId: "G-VDDKL9JPPP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };