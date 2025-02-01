import React, { Component } from "react";
import ToDO from "./components/todos";
import TasksContext from "./assets/context";

class App extends Component {
  state = {
    tasks: [
      { id: 1, name: "Read Chapter 1 of History Textbook", isPending: 1 },
      { id: 2, name: "Complete Math Homework Problems", isPending: 1 },
      { id: 3, name: "Write English Essay Draft", isPending: 1 },
      { id: 4, name: "Study Biology Flashcards", isPending: 1 },
      { id: 5, name: "Review Chemistry Notes", isPending: 1 },
      { id: 6, name: "Practice Programming Exercises", isPending: 1 },
      { id: 7, name: "Prepare for Physics Quiz", isPending: 1 },
      { id: 8, name: "Research Project for Social Studies", isPending: 0 },
      { id: 9, name: "Summarize Literature Readings", isPending: 0 },
      { id: 10, name: "Organize Study Group Session", isPending: 0 },
    ],
  };
  render() {
    return (
      <TasksContext.Provider value={{ tasks: this.state.tasks }}>
        <ToDO />
      </TasksContext.Provider>
    );
  }
}

export default App;
