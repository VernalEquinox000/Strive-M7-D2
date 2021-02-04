import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Search extends Component {
  fetch = async () => {
    let response = await fetch(
      `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin`
    );
    let data = await response.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.fetch}>
          Primary
        </Button>{" "}
      </div>
    );
  }
}
