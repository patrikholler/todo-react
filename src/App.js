import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {

  constructor(props){
        super(props);

        this.state = {
            todos: [
                {id: 0, text: 'Go! And live my life', status: false},
                {id: 1, text: 'Be a shepherd in New Zealand', status: true},
                {id: 2, text: 'Create a new world, braah', status: false},
                {id: 3, text: 'Be the BEST!', status: true},
                {id: 4, text: 'One more task', status: true},
                {id: 5, text: 'Find the key', status: false},

            ],
            nextId: 6
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText){
      const nextID = this.state.nextId + 1;
      let todos = this.state.todos.slice();
      todos.push({id: this.state.nextId, text: todoText});
      this.setState({
          todos: todos,
          nextId: nextID
        });

  }

  removeTodo(id){
      this.setState({
          todos: this.state.todos.filter((todo) => todo.id !== id)
      });
  }

  render() {
    return (
      <div className="App">
          <div className="todo-wrapper">
              <Header />
              <TodoInput todoText="" addTodo={this.addTodo}/>
              <ul>
                  {
                      this.state.todos.map((todo) => {
                          return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>

                      })
                  }
              </ul>

          </div>
      </div>
    );
  }
}

export default App;
