import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
      const{items,handleDelete,handleEdit}=this.props;
    return (
     <li  className="list-group-item d-flex justify-content-between my-2">
        <h6>{items}</h6>
        <div>
            <span className="fa fa-pen text-success mx-2" onClick={handleEdit}></span>
            <span className="fa fa-trash text-danger" onClick={handleDelete}></span>
        </div>
     </li>
    )
  }
}
