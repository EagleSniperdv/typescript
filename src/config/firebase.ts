// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3xIhHLGr3ePEtqkhYx-yAb7ABJqoz0WE",
    authDomain: "fir-ts-2465d.firebaseapp.com",
    projectId: "fir-ts-2465d",
    storageBucket: "fir-ts-2465d.appspot.com",
    messagingSenderId: "418399777706",
    appId: "1:418399777706:web:9d9690ad80b1ddc793f1d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db = getFirestore(app);