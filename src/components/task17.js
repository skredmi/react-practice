import React from "react";

export class Task17 extends React.Component {
  constructor() {
    super();
    this.state = { show: false, name: "Иван", age: 25 };
  }

  showText = () => {
    this.setState({ show: true });
  };

  render() {
    const text = this.state.show ? (
      <p>
        имя: {this.state.name}, возраст: {this.state.age}
      </p>
    ) : null;

    return (
      <div>
        {text}
        <button onClick={this.showText}>Click me</button>
      </div>
    );
  }
}