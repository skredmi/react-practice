import React from "react";

// Дан следующий стейт:
// this.state = {show: true, name: 'Иван'};
// Изначально результат работы метода render следующий ('Иван' берется из this.state.name):
// <div>
// 	<p>Привет, Иван!</p>
// </div>
// Сделайте так, чтобы если this.state.show был равен true, то выводился текст 'Привет, Иван', а если равен false - то 'Пока, Иван'.

export class Task16 extends React.Component {
  constructor() {
    super();
    this.state = { show: true, name: "Иван" };
  }

  render() {
    return (
      <div>
        {this.state.show ? "Привет" : "Пока"}, {this.state.name}!
      </div>
    );
  }
}
