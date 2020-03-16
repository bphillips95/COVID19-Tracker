import React, { useState, useEffect} from 'react';
import axios from 'axios'
// import { Grid, Card } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home'
import './App.css';

function App() {
  const [data, setData] = useState({ cases: []})
  useEffect(() => { 
    const fetchData = async () => {
      const result = await axios(
        "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US", {
          headers: {
            "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY
          }
        }
      )
      setData(result.data)
      console.log(result.data.data)

    }
    fetchData()
  },[])
//  const URL = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US"
  return (
    <Router>
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
    </Router>
  );
}

export default App;
