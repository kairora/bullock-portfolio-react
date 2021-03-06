import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/bullock-portfolio-react" component={About} />
      <Route exact path="/bullock-portfolio" component={Portfolio} />
      <Route exact path="/bullock-contact" component={Contact} />
      <Footer />  
    </Router>
  );
}

export default App;
