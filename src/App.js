import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SearchBar from "./components/SearchBar"
import Home from "./components/Home"
import Details from "./components/Details"

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component {
  state = {searchedLoading: null}

  showSearchResult = (searchString) => {
    this.setState({ searchedLoading: true })
    
    componentDidMount = async () => {
    let response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin`
    );
    let data = await response.json();
    console.log(data);
  };
  }

  render() {
    <div className="App">
      <Router>
        <SearchBar showSearchResult={this.state.searchResult} />
        <Route path="/" exact render={(props) => (
          <Home {...props} 
          searchedLoading={this.state.searchedLoading}
          />
        )} />
      </Router>
    </div>
  }

}

//needs Details component

export default App;
