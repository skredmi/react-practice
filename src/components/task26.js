import React from "react";

//Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']. Выведите каждый элемент этого массива в отдельной <li> в списке ul.
//Переделайте предыдущую задачу так, чтобы под списком появилась кнопочка, по нажатию на которую в конец списка будет добавляться элемент с текстом 'пункт'.
//Переделайте предыдущую задачу так, чтобы появилась кнопочка,
//по нажатию на которую каждый раз будет исчезать последняя li из списка (каждый раз по одной, пока li в списке не закончатся).
//Переделайте предыдущую задачу так, чтобы рядом с каждым именем появилась кнопочка, по нажатию на которую li с этим именем будет удаляться.

export class Task26 extends React.Component {
  constructor() {
    super();
    this.state = { items: ["Коля", "Вася", "Петя", "Иван", "Дима"] };
  }

  deleteItem(index) {
    this.state.items.splice(index, 1);
    this.setState({ items: this.state.items });
  }

  render() {
    const list = this.state.items.map((item, index) => {
      return (
        <li key={index}>
          {item}
          <button onClick={this.deleteItem.bind(this, index)}>Удалить</button>
        </li>
      );
    });
    return <ul>{list}</ul>;
  }
}
