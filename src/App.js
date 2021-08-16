import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import NavBar from './Components/navBar';
import ViewStudents from './Components/viewStudents';
import ViewMajors from './Components/viewMajors';
import AddStudent from './Components/addStudent';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/students" component={ViewStudents} />
          <Route path="/majors" component={ViewMajors} />
          <Route path="/addstudent" component={AddStudent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
