import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC3T3u7hOpwi4OO9zgMJqpseVH7QWo-a9s",
    authDomain: "studentinfosystem-3c634.firebaseapp.com",
    projectId: "studentinfosystem-3c634",
    storageBucket: "studentinfosystem-3c634.appspot.com",
    messagingSenderId: "642196301743",
    appId: "1:642196301743:web:bc94962ffc00d91afdf15a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics();
export default firebase