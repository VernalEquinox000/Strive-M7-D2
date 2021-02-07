import React, { Component } from "react";
import { Button, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import Result from "./Result";

export default class Search extends Component {
  state = {
    location: "",
    position: "",
    jobs: [],
  };

  fetch = async () => {
    let response = await fetch(
      `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.position}&location=${this.state.location}`
    );
    let data = await response.json();
    console.log(data);
    this.setState({ jobs: data });
    this.props.jobsDataHandler(data);
    //e.preventDefault();
  };

  positionHandler = (e) => {
    this.setState({ position: e.target.value }); //test this
  };

  Richard = (e) => {
    e.preventDefault();
    this.fetch();
  };

  locationHandler = (e) => {
    this.setState({ location: e.target.value });
  };

  render() {
    console.log(this.props.idResultHandler);
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form inline onSubmit={this.Richard}>
              <FormControl
                type="text"
                placeholder="Position"
                className="mr-sm-2"
                value={this.state.position}
                onChange={this.positionHandler}
              />
              <FormControl
                type="text"
                placeholder="Location"
                className="mr-sm-2"
                value={this.state.location}
                onChange={this.locationHandler}
              />
              <Button variant="outline-success" type="Submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <hr />
        <Result
          dataRichard={this.state.jobs}
          idResultHandler={this.props.idResultHandler}
        />
      </div>
    );
  }
}

//nb form control si aggiornano, necessita anti aggiornamento
//event.preventDefault()
//inoltre form control può avere type da inserire = Submit
// quindi non passiamo funzione ma type=Submit
