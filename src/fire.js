import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxGEqdDN1vdsNH8BBByM-z2rlyVfP3F44",
  authDomain: "js17-watches.firebaseapp.com",
  projectId: "js17-watches",
  storageBucket: "js17-watches.appspot.com",
  messagingSenderId: "860800067728",
  appId: "1:860800067728:web:ff2f3f0367cb4155451015",
  measurementId: "G-WTP1QBH88L",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
