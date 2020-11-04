import React from "react";

//Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']. Выведите каждый элемент этого массива в отдельной <li> в списке ul.
//Переделайте предыдущую задачу так, чтобы под списком появилась кнопочка, по нажатию на которую в конец списка будет добавляться элемент с текстом 'пункт'.
//Переделайте предыдущую задачу так, чтобы появилась кнопочка, 
//по нажатию на которую каждый раз будет исчезать последняя li из списка (каждый раз по одной, пока li в списке не закончатся).

export class Task25 extends React.Component {
  constructor() {
    super();
    this.state = { items: ["Коля", "Вася", "Петя", "Иван", "Дима"] };
  }

  deleteItem() {
    this.setState({ items: this.state.items.slice(0, -1) });
  }

  render() {
    const list = this.state.items.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return (
      <div>
        <ul>{list}</ul>
        <button onClick={this.deleteItem.bind(this)}>Удалить</button>
      </div>
    );
  }
}
