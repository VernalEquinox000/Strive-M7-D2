import React, { Component } from "react";

export default class Result extends Component {
  data = this.props.dataRichard;

  render() {
    //console.log(this.props.dataRichard);

    return (
      <div>
        <p>Abishek rip</p>
        {this.data.map((job) => (
          <p>
            {job.id} + {job.company}
          </p>
        ))}
      </div>
    );
  }
}
