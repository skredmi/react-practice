import React from "react";

export class Task18 extends React.Component {
  constructor() {
    super();
    this.state = { show: false, name: "Иван", age: 25 };
  }

  toggleText = () => {
    this.setState({ show: !this.state.show });
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
        <button onClick={this.toggleText}>Click me</button>
      </div>
    );
  }
}
