import React, {Component} from 'react';
import './App.css';
import { Task1 } from './components/task1';
import { Task2 } from './components/task2';
import { Task3 } from './components/task3';
import { Task4 } from './components/task4';
import { Task5 } from './components/task5';
import { Task6 } from './components/task6';
import { Task7 } from './components/task7';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Task7 />
        </header>
      </div>
      )    
  }
}

export default App;