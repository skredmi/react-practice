import React from "react";

//Дан инпут и абзац. Сделайте так, чтобы при наборе текста в инпуте он автоматически появлялся в этом абзаце
//Модифицируйте предыдущую задачу так, чтобы текст в абзац выводился в верхнем регистре

export class Task28 extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  render() {
    return (
      <div>
        <p>текст инпута: {this.state.value.toUpperCase()}</p>
        <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
