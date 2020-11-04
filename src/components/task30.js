import React from "react";

//Дан инпут и 3 абзаца. В инпут вводится ФИО пользователя через пробел.
//Сделайте так, чтобы при наборе текста в первом абзаце появилась фамилия пользователя, во втором - имя, а в третьем - отчество.

export class Task30 extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  render() {
    const [surname, name, middlename] = this.state.value.split(" ");

    return (
      <div>
        <p>фамилия: {surname}</p>
        <p>имя: {name}</p>
        <p>отчество: {middlename}</p>
        <input
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
