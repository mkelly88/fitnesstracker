import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import ExercisesList from "./components/Dashboard";
import EditExercise from "./components/Edit";
import CreateExercise from "./components/Create";
import CreateUser from "./components/User";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Hero} />
      <Route path="/dashboard" component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;