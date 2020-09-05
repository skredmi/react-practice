import React from "react";

export class Task10 extends React.Component {
  getText() {
    return <p>текст</p>;
  }

  render() {
    return <div>{this.getText()}</div>;
  }
}
