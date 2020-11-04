import React, { Component } from "react";
import "./App.css";
import { Task30 } from "./components/task30";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Task30 />
        </header>
      </div>
    );
  }
}

export default App;