import React from "react";

// Дан следующий стейт:
// this.state = {name: 'Иван', age: 25};
// Изначально метод render выводит на экран следующее:
// <div>
// 	имя: Иван, возраст: 25
// </div>
// Сделайте кнопочку, по нажатию на которую 'Иван' поменяется на 'Коля', а 25 поменяется на 3

export class Task15 extends React.Component {
  constructor() {
    super();
    this.state = { name: "Иван", age: 25 };
  }

  changeState = () => {
    this.setState({ name: "Коля", age: 30 });
  };

  render() {
    return (
      <div>
        <p>{`имя: ${this.state.name}, возраст: ${this.state.age}`}</p>
        <button onClick={this.changeState}>Click me</button>
      </div>
    );
  }
}
