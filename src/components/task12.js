import React from "react";

export class Task12 extends React.Component {
  constructor() {
    super();
    this.state = { name: "Иван", age: 25 };
  }

  render() {
    return <div>{`имя: ${this.state.name}, возраст: ${this.state.age}`}</div>;
  }
}