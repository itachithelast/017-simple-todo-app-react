import React, { Component } from "react";

class ToDO extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-5 p-5 rounded-4">
        <h3>Task Tracker</h3>
        <form id="input-form">
          <input
            className="rounded-3 form-control"
            type="text"
            placeholder="Type in the task and press Enter to create!"
          />
          <button className="enter-key rounded"></button>
        </form>

        <div className="pending mt-5 p-3">
          <div className="item-pending row align-items-center border-bottom border-dark ">
            <i class="fa-regular fa-square col-1"></i>
            <span className="col">
              Watching the latest seminar about HTML changes
            </span>
            <i class="fa-solid fa-trash-can col-1"></i>
          </div>
        </div>
        <div className="completed px-3">
          <div className="item-complete row align-items-center border-bottom border-dark ">
          <i class="fa-regular fa-square-check col-1"></i>
            <span className="col text-decoration-line-through text-inactive">
              Watching the latest seminar about HTML changes
            </span>
            <i class="fa-solid fa-trash-can col-1"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDO;
