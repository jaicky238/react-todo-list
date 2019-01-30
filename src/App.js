import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from "uuid";
//import PopopBox from './components/PopopBox'

class App extends Component {

   state ={
    items:[],
    id:uuid(),
    item:'',
    editItem:false,
    clearList:false
   }

  // enteredList = (e)=>{
  //   this.setState({
  //     item: e.target.value
  //   },console.log(this.state.item))
  // }
  // addContact = (e)=>{
  //   e.preventDefault();
  //   this.setState({
  //     list:this.state.item
  //   },()=>{console.log("this is submit")})
  // }
  handleChange = (e)=>{
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault();

    const newItem ={
      id:this.state.id,
      title:this.state.item      
    }
    const updatedItems =[...this.state.items,newItem];

    const checkExistingItem = this.state.items.find(item=>(item.title===newItem.title))
    if(checkExistingItem){
      alert("item alread exist")
    }

   else if(newItem.title===''){
     alert("please enter some item")
   }
   
   else{
    this.setState({
      items:updatedItems,
      id:uuid(),
      item:'',
      clearList:true
    })
   }
    
  }
  handleClear = ()=>{
    this.setState({
      items:[],
      clearList:false
    })
  }


  handleDelete = (id)=>{
    const filteredItems = this.state.items.filter(item=>(item.id!==id));
    this.setState({
      items:filteredItems
    },()=>{if(filteredItems.length===0)
      
      {
      this.setState({
      clearList:false
    })
  }
  else{
    this.setState({
      clearList:true
    })
  }
  })
  }


  handleEdit =(id)=>{
    const filteredItems = this.state.items.filter(item=>(item.id!==id));

    const selectedItem = this.state.items.find(item=>(item.id===id))
    //console.log(selectedItem);
    this.setState({
      items:filteredItems,
      item:selectedItem.title,
      id:id,
      editItem:true,
     
    })
  }
  render() {
    return (
     <React.Fragment>
        <div className="container-fluid">
         <div className="container">
          <div className="row mt-5">
            <div className="col-10 mx-auto col-md-6 text-center text-capitalize  p-4" style={{border:"10px solid gray"}}>
              <h3>Todo input</h3>
                <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
                <TodoList items={this.state.items} handleClear={this.handleClear} handleDelete={this.handleDelete} handleEdit={this.handleEdit} clearList={this.state.clearList}/>         
                {/* <PopopBox/> */}
           </div>
        </div>
       </div>
      </div>
    
        
     </React.Fragment>
    );
  }
}

export default App;
