import React, { Component } from "react";
import TasksContext from "../assets/context";

class ToDO extends Component {
  static contextType = TasksContext;
  state = {
    input: "",
  };

  handleInputChange = (el) => {
    this.setState({ input: el.value });
  };

  handleAddTask = (e) => {
    e.preventDefault();
    if (this.state.input) {
      let id = null;
      const idList = this.context.tasks.map((el) => Number(el.id));
      idList
        .sort((a, b) => a - b)
        .forEach((element, index) => {
          if (element !== index && !idList.includes(index)) {
            id = index;
          }
        });
      if (!id) {
        id = this.context.tasks.length;
      }
      const name = this.state.input;
      const isPending = true;
      const updatedContext = [...this.context.tasks, { id, name, isPending }];
      this.context.updateTasks(updatedContext);
      this.setState({ input: "" });
    }
  };

  handleStatusChange = (el) => {
    const id = Number(el.parentElement.id);
    const updatedTasks = this.context.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isPending: !task.isPending };
      }
      return task;
    });
    this.context.updateTasks(updatedTasks);
  };

  handleEdit = null;
  HandleDelete = (el) => {
    const id = Number(el.parentElement.id);
    const updatedTasks = this.context.tasks.filter(
      (element) => element.id !== id
    );
    this.context.updateTasks(updatedTasks);
  };

  loadTasks = (isPending) => {
    return this.context.tasks
      .filter((element) => element.isPending === isPending)
      .map((element) => (
        <div
          key={element.id}
          id={element.id}
          className={`item-${
            isPending ? "pending" : "complete"
          } row align-items-center border-bottom border-dark`}
        >
          <i
            onClick={(e) => this.handleStatusChange(e.target)}
            className={`fa-regular ${
              isPending ? "fa-square" : "fa-square-check"
            } col-1`}
          ></i>
          <span
            onClick={(e) => this.handleEdit(e.target)}
            className={`col ${
              !isPending ? "text-decoration-line-through text-inactive" : ""
            }`}
          >
            {element.name}
          </span>
          <i
            onClick={(e) => this.HandleDelete(e.target)}
            className="fa-solid fa-trash-can col-1"
          ></i>
        </div>
      ));
  };

  render() {
    return (
      <div className="container mt-5 p-5 rounded-4">
        <h3>Task Tracker</h3>
        <form onSubmit={(e) => this.handleAddTask(e)} id="input-form">
          <input
            className="rounded-3 form-control"
            type="text"
            placeholder="Type in the task and press Enter to create!"
            value={this.state.input}
            onChange={(e) => this.handleInputChange(e.target)}
          />
          <button type="submit" className="enter-key rounded"></button>
        </form>
        <div className="pending mt-5 p-3">{this.loadTasks(true)}</div>
        <div className="completed px-3">{this.loadTasks(false)}</div>
      </div>
    );
  }
}

export default ToDO;
