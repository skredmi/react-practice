import React from "react";

export class Task15 extends React.Component {
  constructor() {
    super();
    this.state = { name: "Иван", age: 25 };
  }

  changeState = () => {
    this.setState({ name: "Коля", age: 30 });
  };

  render() {
    return (
      <div>
        <p>{`имя: ${this.state.name}, возраст: ${this.state.age}`}</p>
        <button onClick={this.changeState}>Click me</button>
      </div>
    );
  }
}
