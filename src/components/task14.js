import React from "react";

export class Task14 extends React.Component {
  constructor() {
    super();
    this.state = { name: "Иван", age: 25 };
  }

  showName = () => {
    alert(this.state.name);
  };

  render() {
    return <button onClick={this.showName}>Click me</button>;
  }
}
