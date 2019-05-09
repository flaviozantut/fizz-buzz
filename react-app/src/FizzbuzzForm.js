import React, { Component } from "react";

import Fizzbuzz from "./Fizzbuzz";
import "./FizzbuzzForm.css";

class FizzbuzzForm extends Component {
  state = {
    length: "",
    fizzbuzzArr: []
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.fizzbuzz(this.state.length);
  };

  handleChange = evt => {
    this.setState({
      fizzbuzzArr: [],
      [evt.target.name]: evt.target.value
    });
  };

  fizzbuzz(length = 10, fizz = 3, buzz = 5) {
    const arr = [];
    for (let i = 1; i <= length; i++) {
      let output = "";

      if (this.mod(i, fizz)) {
        output = "Fizz";
      }
      if (this.mod(i, buzz)) {
        output += "Buzz";
      }

      output.length === 0 ? arr.push(i) : arr.push(output);
    }

    this.setState({ fizzbuzzArr: arr });
  }

  mod(index, divisible) {
    return index % divisible === 0;
  }

  render() {
    return (
      <div className="FizzbuzzForm">
        <header className="FizzbuzzForm-header">Fizzbuzz!</header>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="length">Tamanho do Fizzbuzz:</label>
          <input
            name="length"
            type="number"
            value={this.state.length}
            onChange={this.handleChange}
            placeholder="Insira tamanho do fizzbuzz"
          />

          <button disabled={!this.state.length}>fizz o' Buzz!</button>
        </form>

        <Fizzbuzz data={this.state.fizzbuzzArr} />
      </div>
    );
  }
}

export default FizzbuzzForm;
