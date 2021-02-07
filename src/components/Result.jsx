import React, { Component } from "react";

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
          <p onClick={() => this.selectedJobHandler(job.id)}>
            {job.id} + {job.company}
          </p>
        ))}
      </div>
    );
  }
}

// sulle class component, se chiamo variable o funzione da qualche parte
// DEVO UTILIZZARE SEMPRE SEMPRE SEMPRE IL *******THIS*******
