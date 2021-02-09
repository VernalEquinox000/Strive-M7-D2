import React, { Component } from "react";

export default class Details extends Component {
  /*   fetch = async () => {
    let response = await fetch(
      `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=front&location=${this.props.match.path}`
    );
    let data = await response.json();
    console.log(data);

    //e.preventDefault();
  }; */

  render() {
    //CONSOLLOGGATILCULO (cit.)
    console.log(this.props.choice);
    return (
      <div>
        <p>
          {" "}
          {this.props.choice
            ? this.props.choice.company
            : "Sta gran ceppa di katso"}
        </p>
      </div>
    );
  }
}
