import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-HXkh5oAX5NswajkNYba1HH2nOop4wmU",
  authDomain: "webchat-50099.firebaseapp.com",
  projectId: "webchat-50099",
  storageBucket: "webchat-50099.appspot.com",
  messagingSenderId: "352098917192",
  appId: "1:352098917192:web:a780530b131647b58b317d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage=getStorage();
export const db=getFirestore(app);