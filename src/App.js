import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    numero: 0
  };

  add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    } else if (this.state.numero >= 10) {
      alert("O contador chegou ao seu número limite!");
    }
  };

  remove = () => {
    if (this.state.numero >= 1) {
      this.setState({
        numero: this.state.numero - 1
      });
    } else if (this.state.numero <= 0) {
      alert("O contador chegou ao seu número limite!");
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        <h1>{this.state.numero}</h1>
        <button onClick={this.remove}>-</button>
      </div>
    );
  }
}

export default App;
