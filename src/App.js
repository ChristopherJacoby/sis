// import firebase from './firebase';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import NavBar from "./Components/Header/navBar";
import AddStudent from "./Components/addStudent";
import SignInAndSignUp from "./Components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { useEffect, useState } from "react";
// import auth from "./firebase/firebase.util";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  // Listen to onAuthStateChanged
  // useEffect(() => {
  //   const firebase = auth;

  //   if (firebase) {
  //     firebase.auth().onAuthStateChanged((authUser) => {
  //       if (authUser) {
  //         setCurrentUser(authUser.email);
  //         console.log(currentUser);
  //       } else {
  //         setCurrentUser(null);
  //       }
  //     });
  //   }
  // }, []);

  return (
    <div className="App">
      <Router>
        <NavBar currentUser={currentUser} />
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
