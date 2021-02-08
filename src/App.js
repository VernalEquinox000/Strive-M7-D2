import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import Result from "./components/Result";
import Details from "./components/Details";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    idResult: "",
    jobsData: [],
    selectedJobby: null,
  };

  idResultHandler = (id) => {
    this.setState({ idResult: id });
  };

  jobsDataHandler = (jobsArray) => {
    this.setState({ jobsData: jobsArray });
  };

  componentDidUpdate(prevProps) {
    if (
      this.state.idResult !== prevProps.idResult &&
      this.state.jobsData !== prevProps.jobsData
    ) {
      var newSel = this.state.jobsData.find(
        (job) => job.id === this.state.idResult
      );
      console.log(newSel);
      console.log("tworks");
    } else {
      console.log("Not working");
    }
  }

  render() {
    const newSel =
      this.state.jobsData && this.state.idResult
        ? this.state.jobsData.find((job) => job.id === this.state.idResult)
        : console.log("SOMETHING WENT WRONG");
    console.log(newSel);

    return (
      <div className="App">
        <Router>
          <button
            onClick={() => this.setState({ selectedJobby: newSel })}
          ></button>
          {this.state.jobsData && this.state.idResult
            ? "funziona"
            : "non funziona"}
          
        <Switch>
          <Route
              path="/"
              exact
            render={() => (
              <Search
                idResultHandler={this.idResultHandler}
                jobsDataHandler={this.jobsDataHandler}
              />
            )}
          />
          
          <Route path="/details" exact render={(props) => (<Details {...props} choice={this.state.selectedJobby} />)} />
          </Switch>
        </Router>
      </div>
    );
  }
  //Su linea 25 posso passare props, su linea 26 NO!
}

//needs Details component

export default App;
