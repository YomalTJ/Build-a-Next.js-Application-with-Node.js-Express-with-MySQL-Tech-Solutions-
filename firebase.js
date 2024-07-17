import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9fFYCS7kNB1Eb8ZOtuWW0Jqc_QsfiKH4",
    authDomain: "tech-solutions-ede91.firebaseapp.com",
    projectId: "tech-solutions-ede91",
    storageBucket: "tech-solutions-ede91.appspot.com",
    messagingSenderId: "682060303345",
    appId: "1:682060303345:web:154bd814c97df08f439250",
    measurementId: "G-ZVB4QRW0LG"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();