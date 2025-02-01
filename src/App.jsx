import React, { Component } from "react";
import ToDO from "./components/todos";
import TasksContext from "./assets/context";

class App extends Component {
  state = {
    tasks: [
      { id: 1, name: "Read Chapter 1 of History Textbook", isPending: true },
      { id: 2, name: "Complete Math Homework Problems", isPending: true },
      { id: 3, name: "Write English Essay Draft", isPending: true },
      { id: 4, name: "Study Biology Flashcards", isPending: true },
      { id: 5, name: "Review Chemistry Notes", isPending: true },
      { id: 6, name: "Practice Programming Exercises", isPending: true },
      { id: 7, name: "Prepare for Physics Quiz", isPending: true },
      { id: 8, name: "Research Project for Social Studies", isPending: false },
      { id: 9, name: "Summarize Literature Readings", isPending: false },
      { id: 10, name: "Organize Study Group Session", isPending: false },
    ],
  };

  updateTasks = (updatedTasks) => {
    this.setState({ tasks: updatedTasks });
  };
  render() {
    return (
      <TasksContext.Provider value={{ tasks: this.state.tasks , updateTasks : this.updateTasks}}>
        <ToDO />
      </TasksContext.Provider>
    );
  }
}

export default App;
