import React from "react";

export class Task11 extends React.Component {
  getNum1() {
    return 1;
  }

  getNum2() {
    return 2;
  }

  render() {
    return <div>{`текст ${this.getNum1() + this.getNum2()}`}</div>;
  }
}
