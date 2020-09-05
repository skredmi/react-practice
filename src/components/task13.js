import React from "react";

export class Task13 extends React.Component {
  showMessage() {
    alert("Hello");
  }

  render() {
    return <button onClick={this.showMessage}>Click me</button>;
  }
}