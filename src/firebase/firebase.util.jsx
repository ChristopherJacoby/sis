import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3T3u7hOpwi4OO9zgMJqpseVH7QWo-a9s",
  authDomain: "studentinfosystem-3c634.firebaseapp.com",
  projectId: "studentinfosystem-3c634",
  storageBucket: "studentinfosystem-3c634.appspot.com",
  messagingSenderId: "642196301743",
  appId: "1:642196301743:web:bc94962ffc00d91afdf15a"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true })
//timestamp
const timestamp = firebase.firestore.Timestamp

export { auth, db, timestamp };