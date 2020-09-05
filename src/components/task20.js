import React from "react";

export class Task20 extends React.Component {
  constructor() {
    super();
    this.state = { names: ["Коля", "Вася", "Петя"] };
  }

  render() {
    const list = this.state.names.map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul>{list}</ul>;
  }
}