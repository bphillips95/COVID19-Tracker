import React from 'react';

// import { Grid, Card } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home'
import './App.css';

function App() {
 
  return (
    <Router>
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
    </Router>
  );
}

export default App
