import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYkAMIMwvL66lnzRFU9nldsrU1XTBOg3A",
  authDomain: "auth.myedukos.com",
  // authDomain: "myedukos-3bbec.firebaseapp.com",
  databaseURL: "https://myedukos-3bbec.firebaseio.com",
  projectId: "myedukos-3bbec",
  storageBucket: "myedukos-3bbec.appspot.com",
  messagingSenderId: "148343515344",
  appId: "1:148343515344:web:3d1d3d39171c89da4016d5",
  measurementId: "G-Z88TLQDYGZ",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
