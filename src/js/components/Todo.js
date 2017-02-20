import React from "react";
import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component {

    constructor() {
        super();
    }

    deleteTodo(id) {
        console.log(id);
        TodoActions.deleteTodo(id);
    }

    render() {
        
        /*
        const { complete, edit, text } = this.props;
        const icon = complete ? "\u2714" : "\u2716";
        if (edit) {
            return (
                <li>
                    <input value={text} focus="focused" />
                </li>
            );
        }

        return (
            <li>
              <span>{text}</span>
              <span>{icon}</span>
            </li>
        );*/
        //console.log(this.props)
        const  { id, complete, text } = this.props;
        const icon = complete ? "\u2714" : "\u2716";

        return (
            <li>
                <span>{text}</span>
                <span onClick={this.deleteTodo.bind(this, id)}>{icon}</span>
            </li>
        );
    };
}