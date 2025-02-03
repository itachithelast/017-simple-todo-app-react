import React, { Component } from "react";
import TasksContext from "../assets/context";

class DialogRemoveItem extends Component {
  static contextType = TasksContext;
  item = this.context.tasks.filter((el) => el.id === this.props.id);
  state = {
    input: this.item[0].name,
  };
  handleChange = (e)=> {
    this.setState({input: e.target.value})
  }
  handleEdit = (e)=>{
    e.preventDefault()
    const updatedTasks = this.context.tasks.map(
        (task)=>{
            if (task.id === this.props.id){
                return {...task, name:this.state.input}
            }else return task
        }
    )
    this.context.updateTasks(updatedTasks)
    this.props.handleClose()
  }
  render() {
    return (
      <div className="container dialogbox mt-5 p-5 rounded-4">
        <form action="">
          <label htmlFor="edit-input">Edit task descriptions:</label>
          <input
          onChange={(e)=>this.handleChange(e)}
            value={this.state.input}
            type="text"
            name="edit-input"
            id="edit-input"
            className="form-control my-4"
          />
          <div className="row justify-content-around mt-3">
            <button onClick={(e)=>this.handleEdit(e)} className="btn col-4 btn-success">Edit</button>
            <button onClick={(e)=>this.props.handleCancel(e)} className="btn col-4 btn-danger">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default DialogRemoveItem;
