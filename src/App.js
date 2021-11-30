import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./Components/Header/navBar";
import SignInAndSignUp from "./Components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Students from './Components/Student-DB/student.component';
import { useAuthContext } from './CustomHooks/useAuthContext';
import AddStudent from './Components/add-student/addStudent.component';


const App = () => {
    const { authIsReady, user } = useAuthContext()

    return (
        <div className="App">
            {authIsReady && (
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={SignInAndSignUp} />
                        <Route path="/students">
                            {user ? <Students /> : <Redirect to="/signin" />}
                        </Route>
                        <Route path="/addstudent">
                            {user ? <AddStudent /> : <Redirect to="/signin" />}
                        </Route>
                        <Route path="/signin">
                            {user ? <Redirect to="/students" /> : <SignInAndSignUp />}
                        </Route>
                    </Switch>
                </Router>
            )}
        </div>

    );
};

//For package.json - start: "env-cmd -f .env.development"

export default App;