// import firebase from './firebase';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import NavBar from "./Components/navBar";
import AddStudent from "./Components/addStudent";
import SignIn from "./Components/signIn";
import SignUp from "./Components/signUp";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/addstudent" component={AddStudent} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
};

//For package.json - start: "env-cmd -f .env.development"

export default App;
