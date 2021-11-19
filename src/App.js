import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Student-DB/student.component";
import NavBar from "./Components/Header/navBar";
import SignInAndSignUp from "./Components/sign-in-and-sign-up/sign-in-and-sign-up.component";


const App = () => {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </Router>
    </div>
  );
};

//For package.json - start: "env-cmd -f .env.development"

export default App;
