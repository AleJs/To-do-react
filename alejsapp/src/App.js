import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json'
import  Todoform from './components/Todoform'
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleApptodo = this.handleApptodo.bind(this);
  }

  handleApptodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  removeTodo(index){
    if(window.confirm('quieres eliminar esto ')){
      this.setState({
        todos: this.state.todos.filter((e,i)=>{
          return i !== index
        })
      })
    }
  }
  render() {
  const todos =  this.state.todos.map((todos,i) => {
      return (
            <div className="col-md-4">
            <div className="card-md-4">
              <div className="card-header">
                 <h3> {todos.title}</h3>
                 <span className="badge badge-pill badge-danger ml-2">
                   {todos.priority}
                 </span>
                  </div>
                  <div className="card-body">
                    <p>{todos.description}</p>
                    <p><mark>{todos.responsible}</mark></p>

                    <div className="card-footer">
                      <button className="Btn btn-danger"
                        onClick={this.removeTodo.bind(this, i )}>
                          delete
                      </button>
                    </div>
                  </div>

            </div>
</div>

      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
        <a className="text-white">
          Task
          <span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
           </span>
        </a>
        </nav>

      <div className="container">
        <div className="row mt-4">
            <div className="col-md-4 text-center">
                <Todoform onApptodo={this.handleApptodo}></Todoform>
                  <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>

          </div>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
