import React, { Component } from "react";
import ToDO from "./components/todos";
import TasksContext from "./assets/context";

class App extends Component {
  state = {
    tasks: [
      { id: 0, name: "Read Chapter 1 of History Textbook", isPending: true },
      { id: 1, name: "Organize Study Group Session", isPending: false },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    // Save to local storage whenever tasks state changes
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  componentDidMount(){
    const tasks = localStorage.getItem("tasks")
    if (tasks){
      this.setState({tasks: JSON.parse(tasks)})
    }
  }

  updateTasks = (updatedTasks) => {
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <TasksContext.Provider
        value={{ tasks: this.state.tasks, updateTasks: this.updateTasks }}
      >
        <ToDO />
      </TasksContext.Provider>
    );
  }
}

export default App;
