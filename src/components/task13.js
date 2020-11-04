import React from "react";

// Сделайте кнопочку, по нажатию на которую сработает метод showMessage и на экран алертом выведется сообщение с текстом 'hello'.

export class Task13 extends React.Component {
  showMessage() {
    alert("Hello");
  }

  render() {
    return <button onClick={this.showMessage}>Click me</button>;
  }
}
