import React from "react";

export class Task21 extends React.Component {
  constructor() {
    super();
    this.state = { names: ["Коля", "Вася", "Петя"] };
  }

  render() {
    const list = this.state.names.map((item, index) => {
      return (
        <li key={item}>
          {item} - {index + 1}
        </li>
      );
    });
    return <ul>{list}</ul>;
  }
}