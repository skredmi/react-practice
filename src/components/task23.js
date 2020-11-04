import React from "react";

//Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']. Выведите каждый элемент этого массива в отдельной <li> в списке ul.

export class Task23 extends React.Component {
  constructor() {
    super();
    this.state = { items: ["Коля", "Вася", "Петя", "Иван", "Дима"] };
  }

  render() {
    const list = this.state.items.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return <ul>{list}</ul>;
  }
}
