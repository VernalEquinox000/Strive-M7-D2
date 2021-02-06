import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Search from "./components/Search"
import Result from "./components/Result"
import Details from "./components/Details"

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component {
  
  /* fetch = async () => {
    let response = await fetch(
      `https://jobs.github.com/positions.json?description=frontend&location=berlin`
    );
    let data = await response.json();
    console.log(data);
  } */

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Search} />
          <Route path="/puppa" render = {(props) => <Details {...props} /> } />
          </Router>
      </div>
    )
  }

}

//needs Details component

export default App;
