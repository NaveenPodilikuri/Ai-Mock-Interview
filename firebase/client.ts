import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCSF8KYudx9iwQ9R0v9EZQsB6ipRTJt7_s",
    authDomain: "prepwiseinterview-c2eb7.firebaseapp.com",
    projectId: "prepwiseinterview-c2eb7",
    storageBucket: "prepwiseinterview-c2eb7.firebasestorage.app",
    messagingSenderId: "846683639605",
    appId: "1:846683639605:web:c28c864a79a4553b19867c",
    measurementId: "G-F8NW5N60MZ"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const db=getFirestore(app)