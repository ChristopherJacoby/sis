// import firebase from './firebase';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import NavBar from "./Components/Header/navBar";
import AddStudent from "./Components/addStudent";
import SignInAndSignUp from "./Components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    loggedIn: false
  });

  // const checkLogin = () => {
  //   if (!currentUser.loggedIn) {
  //     return <span>User is logged out</span>;
  //   } else {
  //     return <span>User is logged in</span>;
  //   }
  // };
  unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setCurrentUser({ currentUser: userAuth });
    });

    return function cleanup() {
      //unsubscribeFromAuth();
    };
  });

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/addstudent" component={AddStudent} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </Router>
    </div>
  );
};

//For package.json - start: "env-cmd -f .env.development"

export default App;
