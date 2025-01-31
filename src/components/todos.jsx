import React, { Component } from "react";

class ToDO extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-5 p-3 rounded-4">
        <h3>Task Tracker</h3>
        <form id="input-form">
          <input
            className="rounded-3 form-control"
            type="text"
            placeholder="Type in the task and press Enter to create!"
          />
          <button className="enter-key rounded"></button>
        </form>

        <div className="pending row mt-5 border-bottom border-dark align-items-center p-3">
          <i class="fa-regular fa-square col-1"></i>
          <span className="col">
            Watching the latest seminar about HTML changes
          </span>
          <i class="fa-solid fa-trash-can col-1"></i>
        </div>
        <div className="completed"></div>
      </div>
    );
  }
}

export default ToDO;
