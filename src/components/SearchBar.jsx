import React, { Component } from "react";
import { NavBar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  state = { searchString: "" };

  handleEnterKey = () => {
    this.props.showSearchResult(this.state.searchString);
  };

  searchStringHandler = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      // WHEN ENTER KEY IS PRESSED
      this.props.showSearchResult(this.state.searchString);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
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
                <Nav.Link
                  active={
                    this.props.location.pathname.includes("details")
                      ? true
                      : false
                  }
                  href="/"
                >
                  Home
                </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onKeyDown={this.searchStringHandler}
                  onChange={this.searchStringHandler}
                  value={this.state.searchString}
                />
                <Button variant="outline-success" onClick={this.handleEnterKey}>
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </>
      </div>
    );
  }
}

export default withRouter(SearchBar);
