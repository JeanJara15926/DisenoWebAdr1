import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import Home from './components/pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Curso from './components/pages/Curso';
import Certificados from './components/pages/Certificados';
import SignUp from './components/pages/SignUp';
import Curso1 from './components/pages/Curso1';
import Curso2 from './components/pages/Curso2';
import Curso3 from './components/pages/Curso3';
import Curso4 from './components/pages/Curso4';

function App() {
  return (    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/curso' component={Curso} />  
          <Route path='/curso1' component={Curso1} />   
          <Route path='/curso2' component={Curso2} />  
          <Route path='/curso3' component={Curso3} />  
          <Route path='/curso4' component={Curso4} />        
          <Route path='/products' component={Certificados} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>    
  );
}

export default App;