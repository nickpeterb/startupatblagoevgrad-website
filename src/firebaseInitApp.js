
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDJEY0795vSABZvqgHfnkYNd1A0Nv6b4Bo",
    authDomain: "startup-website-356e7.firebaseapp.com",
    projectId: "startup-website-356e7",
    storageBucket: "startup-website-356e7.appspot.com",
    messagingSenderId: "968539133413",
    appId: "1:968539133413:web:6c403bcef46e9a149acb0c",
    measurementId: "G-Z0ZE3QX2DC"
});

export const firestore = firebase.firestore();
