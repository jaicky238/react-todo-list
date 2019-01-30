import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
      const{items,handleClear,handleDelete,handleEdit,clearList} =this.props;
    return (

     <ul className="list-group my-3">
        <h3 className="text-center">Todo List</h3>
        {
            items.map(item=>{
                return <TodoItem key={item.id} items={item.title} handleClear={handleClear} handleDelete={()=>handleDelete(item.id)}  handleEdit={()=>handleEdit(item.id)} />
            })
        }
        {clearList?<button type="button" className="btn btn-danger btn-block mt3" onClick={handleClear}> Clear List </button>:<p className="bg-danger py-2 text-white">List is Empty</p>}
        {/* {clearList?false:} */}
        
     </ul>
    )
  }
}
