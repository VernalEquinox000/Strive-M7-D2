import React, { Component } from "react";
import { Navbar, Nav, FormControl, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  state = {
    search: {
      location: "",
      position: "",
    },
  };

  render() {
    return (
      <div>
        <>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Jobsearch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={this.state.search.location}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={this.state.search.position}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </>
      </div>
    );
  }
}

export default withRouter(SearchBar);
