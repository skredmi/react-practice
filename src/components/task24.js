import React from "react";

//Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']. Выведите каждый элемент этого массива в отдельной <li> в списке ul.
//Переделайте предыдущую задачу так, чтобы под списком появилась кнопочка, по нажатию на которую в конец списка будет добавляться элемент с текстом 'пункт'.

export class Task24 extends React.Component {
  constructor() {
    super();
    this.state = { items: ["Коля", "Вася", "Петя", "Иван", "Дима"] };
  }

  addItem() {
    this.state.items.push("пункт");
    this.setState({ items: this.state.items });
  }

  render() {
    const list = this.state.items.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return (
      <div>
        <ul>{list}</ul>
        <button onClick={this.addItem.bind(this)}>Добавить</button>
      </div>
    );
  }
}
