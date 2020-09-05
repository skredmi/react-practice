import React from "react";

export class Task16 extends React.Component {
  constructor() {
    super();
    this.state = { show: true, name: "Иван" };
  }

  render() {
    return (
      <div>
        {this.state.show ? "Привет" : "Пока"}, {this.state.name}!
      </div>
    );
  }
}