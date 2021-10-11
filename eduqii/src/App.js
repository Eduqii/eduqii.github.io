import React, {Fragment} from 'react'; 
import './App.css';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Footer from './layout/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Fragment className="App">
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Footer />
    </Fragment>
    </Router>
  );
}

export default App;
