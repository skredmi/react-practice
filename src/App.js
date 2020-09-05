import React, { Component } from "react";
import "./App.css";
import { Task22 } from "./components/task22";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Task22 />
        </header>
      </div>
    );
  }
}

export default App;