import React from "react";

// Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя']. Выведите каждый элемент этого массива в отдельной <li> в списке ul. Вот так:
// <ul>
// 	<li>Коля</li>
// 	<li>Вася</li>
// 	<li>Петя</li>
// </ul>

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
