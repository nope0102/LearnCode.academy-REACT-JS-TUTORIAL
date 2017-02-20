import React from "react";
import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Todos extends React.Component {
  constructor(){
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
    console.log(TodoStore.listenerCount("change"))
  };

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  componentWillUnmount() {
    console.log("unmount");

    TodoStore.removeListener("change", this.getTodos);
  }

  createTodo() {
    const { text } = this.state;
    if( text ){
      TodoActions.createTodo(text);
      //this.setState({text: ""});
    }
  }

  reloadTodo() {
    TodoActions.reloadTodo();
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    const { todos } = this.state;
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });
   // const { text } = this.state;
    return (
      <div>
        <button onClick={this.reloadTodo.bind()}>Reload!</button>
        <button onClick={this.createTodo.bind(this)}>Create!</button>
        <input onChange={this.handleChange.bind(this)} />
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
