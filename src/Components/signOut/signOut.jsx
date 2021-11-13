import React from "react";
import getFirebase from "../../firebase/firebase.util";

const SignOutButton = () => {
  const firebaseInstance = getFirebase();

  const signOut = async (props) => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return <button onClick={() => signOut()}>Sign out</button>;
};

export default SignOutButton;
