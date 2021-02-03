import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SearchBar from "./components/SearchBar"
//import Home from "./components/Home"
import Details from "./components/Details"
import Result from "./components/Result"

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component {
  
  /* fetch = async () => {
  let response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin`
  );
  let data = await response.json();
  console.log(data);
};
}; */

  render() {
    return (
      <div className="App">
        <Router>
          <Home/>
        </Router>
      </div>
    )
  }
}

//needs Details component

export default App;
