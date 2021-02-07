import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Search from "./components/Search"
import Result from "./components/Result"
import Details from "./components/Details"

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component {

  state = {
    idResult: null,
    jobsData: [],
    selectedJob: null //null perché è un object
  }

//find restituisce elemento, filter restituisce elemento nell'array
  
  //THIS.STATE INFAME PER TE SOLO LE LAME
  
  

  idResultHandler = (id) => {
    this.setState({ idResult: id })
    var theChosenOne = this.state.jobsData.find(job => job.id === this.state.idResult)

  }

  jobsDataHandler = (jobsArray) => {
    this.setState({ jobsData: jobsArray })
    //this.setState({selectedJob: this.theChosenOne})
  }


  componendDidMount = () => {
    if (this.state.idResult != null) {
      this.setState({ selectedJob: this.theChosenOne })
    }
      else { console.log("select a job") }
  }
  
  render() {

    

    console.log(this.theChosenOne)
    //console.log(this.state.idResult)

    return (
      <div className="App">
        <Router>
          <Route path="/" render={() => <Search idResultHandler={this.idResultHandler} jobsDataHandler={this.jobsDataHandler}/> }/>
          <Route path="/details" component={Details} />
          
          </Router>
      </div>
    )
  }
  //Su linea 25 posso passare props, su linea 26 NO!

}

//needs Details component

export default App;
