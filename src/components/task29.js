import React from "react";

//Дан инпут и абзац. В инпут вводится возраст пользователя. 
//Сделайте так, чтобы при наборе текста в абзаце автоматически появлялся год рождения пользователя.

export class Task29 extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  render() {
    const date = new Date().getFullYear();
    return (
      <div>
        <p>год рождения: {date - this.state.value}</p>
        <input value={this.state.value} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
