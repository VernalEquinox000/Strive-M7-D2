import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Result extends Component {
  //data = this.props.dataRichard;
  state = { id: "" };

  selectedJobHandler = (id) => {
    this.props.idResultHandler(id);
    this.setState({ id: id });
  };

  render() {
    console.log(this.props.dataRichard);
    console.log(this.props.idResultHandler);

    return (
      <div>
        {this.props.dataRichard.map((job) => (
          <Link to="/details">
            <p onClick={() => this.selectedJobHandler(job.id)}>
              {job.id} + {job.company}
            </p>
          </Link>
        ))}
      </div>
    );
  }
}

// sulle class component, se chiamo variable o funzione da qualche parte
// DEVO UTILIZZARE SEMPRE SEMPRE SEMPRE IL *******THIS*******
