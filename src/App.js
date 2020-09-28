import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import './App.css';

function App() {
  return (
    <Router>
        <Nav />
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
