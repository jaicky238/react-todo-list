import React, { Component } from 'react'
export default class TodoInput extends Component {
  
  render() {
   
      const {item,handleChange,handleSubmit,editItem}=this.props;
          return (
                <div className="card card-body">
                <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter Item" onChange={handleChange} value={item}  />
                <div className="input-group-append">
                  <span className="input-group-text fa fa-book text-primary "></span>
                </div>
             </div>
             <button type="submit" className="btn btn-primary d-block w-100">{editItem?"Edit Item":"Add Item"}</button>
             </form>
         </div>
    )
  }
}
