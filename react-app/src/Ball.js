import React, { Component } from "react";

import "./Ball.css";

class Ball extends Component {
  render() {
    return (
      <div
        className={`Ball ${this.props.data === "Fizz" ? "Ball-fizz" : ""} ${
          this.props.data === "Buzz" ? "Ball-buzz" : ""
        } ${this.props.data === "FizzBuzz" ? "Ball-fizzbuzz" : ""}`}
      >
        {this.props.data}
      </div>
    );
  }
}

export default Ball;
