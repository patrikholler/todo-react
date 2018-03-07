import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: this.props.todo.status};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }

    onTodoChange(event){

        this.props.todo.text = event.target.value;
        this.setState({text: event.target.value});
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>x</button><input className="editTodo" type="text" value={this.props.todo.text} onChange={this.onTodoChange.bind(this)} /><button className="statusTodo" onClick={this.handleClick}>{this.state.isToggleOn ? '✘' : '✓'}</button>
            </div>
        );
    }
}