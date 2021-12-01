import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3T3u7hOpwi4OO9zgMJqpseVH7QWo-a9s",
  authDomain: "studentinfosystem-3c634.firebaseapp.com",
  projectId: "studentinfosystem-3c634",
  storageBucket: "studentinfosystem-3c634.appspot.com",
  messagingSenderId: "642196301743",
  appId: "1:642196301743:web:bc94962ffc00d91afdf15a"
};

//initialize Firebase app
initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
