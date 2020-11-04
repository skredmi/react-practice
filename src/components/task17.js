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

export class Task17 extends React.Component {
  constructor() {
    super();
    this.state = { show: false, name: "Иван", age: 25 };
  }

  showText = () => {
    this.setState({ show: true });
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
        <button onClick={this.showText}>Click me</button>
      </div>
    );
  }
}