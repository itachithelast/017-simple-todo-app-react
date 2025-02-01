import React, { Component } from "react";
import TasksContext from "../assets/context";

class ToDO extends Component {
  static contextType = TasksContext;
  loadPendings = () => {
    return this.context.tasks.filter((element) =>element.isPending).map(element=>
         (
          <div
            id={element.id}
            className="item-pending row align-items-center border-bottom border-dark "
          >
            <i className="fa-regular fa-square col-1"></i>
            <span className="col">
              {element.name}
            </span>
            <i className="fa-solid fa-trash-can col-1"></i>
          </div>
        ))
      }

  loadCompleted = ()=>{
    return this.context.tasks.filter(element=>!element.isPending).map(
      element=>(
        <div
        id={element.id}
        className="item-complete row align-items-center border-bottom border-dark "
      >
        <i className="fa-regular fa-square-check col-1"></i>
        <span className="col text-decoration-line-through text-inactive">
          {element.name}
        </span>
        <i className="fa-solid fa-trash-can col-1"></i>
      </div>
      )
    )
  }

  render() {
    console.log(this.context);
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
        <div className="pending mt-5 p-3">{this.loadPendings()}</div>
        <div className="completed px-3">{this.loadCompleted()}
        </div>
      </div>
    );
  }
}

export default ToDO;
