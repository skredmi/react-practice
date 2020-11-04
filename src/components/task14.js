import React from "react";

// Дан следующий стейт:
// this.state = {name: 'Иван', age: 25};
// Сделайте кнопочку, по нажатию на которую сработает метод showName и на экран алертом выведется имя пользователя из стейта.

export class Task14 extends React.Component {
  constructor() {
    super();
    this.state = { name: "Иван", age: 25 };
  }

  showName = () => {
    alert(this.state.name);
  };

  render() {
    return <button onClick={this.showName}>Click me</button>;
  }
}
