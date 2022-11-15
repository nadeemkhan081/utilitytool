import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
// import React, {useState} from 'react';
import {BrowserRouter as Router,Switch, Route}from "react-router-dom";

function App() {


  return (
    <>
      <Router>
      <Navbar title="NF Infotech And IT Solutions"/>
      <div className="container my-3">
          <Switch>
            <Route path = "/About">
              <About />
            </Route>
            <Route path = "/">
             <TextForm heading="Enter the text to analyze"/>
            </Route>
          </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;

