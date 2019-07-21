import React, {Component} from 'react';
import ToDO from "../ToDo";

class ToDoList extends Component {
    render() {
        const {todos} = this.props;
        return (
            <ul>
                {
                    todos.map(
                        toDo => (
                            <ToDO toDo={toDo}/>
                        )
                    )
                }
            </ul>
        );
    }
}

export default ToDoList;