import React from "react";

// Пусть класс App имеет метод getText(), который своим результатом возвращает '<p>текст</p>'.
// Используя метод getText() в методе render выведите на экран следующее:
// <div>
// 	<p>текст</p>
// </div>

export class Task10 extends React.Component {
  getText() {
    return <p>текст</p>;
  }

  render() {
    return <div>{this.getText()}</div>;
  }
}
