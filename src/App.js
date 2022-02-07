import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init({});
  }, []);

  
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Hero} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
