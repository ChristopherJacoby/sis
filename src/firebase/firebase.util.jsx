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

let instance;
export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}

export const auth = firebase.auth();
