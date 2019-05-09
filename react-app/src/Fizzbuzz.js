import React, { Component } from "react";
import uuid from "uuid/v4";

import "./Fizzbuzz.css";
import Ball from "./Ball";

class Fizzbuzz extends Component {
  render() {
    return (
      <div className="Fizzbuzz">
        {this.props.data.map(number => (
          <Ball key={uuid()} data={number} />
        ))}
      </div>
    );
  }
}

export default Fizzbuzz;
