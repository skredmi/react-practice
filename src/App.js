import React, { Component } from "react";
import "./App.css";
import { Task15 } from "./components/task15";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Task15 />
        </header>
      </div>
    );
  }
}

export default App;