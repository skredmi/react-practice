import React from "react";

// Дан следующий стейт:
// this.state = {name: 'Иван', age: 25};
// Дана кнопка (результат работы метода render):
// <div>
// 	<button>Нажми на меня</button>
// </div>
// Сделайте так, чтобы по нажатию на кнопку результат работы метода render изменился на следующее ('Иван' и 25 должны взяться из стейта):
// <div>
// 	<p>имя: Иван, возраст: 25</p>
// 	<button>Нажми на меня</button>
// </div>
//  Переделайте предыдущую задачу так, чтобы по первому нажатию на кнопку абзац с нашим текстом показывался, 
//а по второму нажатию - скрывался.

export class Task18 extends React.Component {
  constructor() {
    super();
    this.state = { show: false, name: "Иван", age: 25 };
  }

  toggleText = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const text = this.state.show ? (
      <p>
        имя: {this.state.name}, возраст: {this.state.age}
      </p>
    ) : null;

    return (
      <div>
        {text}
        <button onClick={this.toggleText}>Click me</button>
      </div>
    );
  }
}
