import React from "react";

// Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя']. Выведите каждый элемент этого массива в отдельной <li> в списке ul. Вот так:
// <ul>
// 	<li>Коля</li>
// 	<li>Вася</li>
// 	<li>Петя</li>
// </ul>
//  Переделайте предыдущую задачу так, чтобы в каждой li кроме элемента массива еще и стоял его порядковый номер в массиве. Вот так:
// <ul>
// 	<li>Коля - 1</li>
// 	<li>Вася - 2</li>
// 	<li>Петя - 3</li>
// </ul>

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
