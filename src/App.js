import React, { Component } from "react";
import "./App.css";
import { Task1 } from "./components/task1";
import { Task2 } from "./components/task2";
import { Task3 } from "./components/task3";
import { Task4 } from "./components/task4";
import { Task5 } from "./components/task5";
import { Task6 } from "./components/task6";
import { Task7 } from "./components/task7";
import { Task8 } from "./components/task8";
import { Task9 } from "./components/task9";
import { Task10 } from "./components/task10";
import { Task11 } from "./components/task11";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Task11 />
        </header>
      </div>
    );
  }
}

export default App;