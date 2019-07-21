import React from 'react';
import {store} from '../../index';
import ToDo from "../ToDo";
import FilterLink from "../FilterLink";

class ToDoApp extends React.Component {
    id = 0;
    // not a pure function
    handleClick = () => {
        store.dispatch({type: "ADD_TODO", toDo: {id: this.id++, text: this.input.value}});
        this.input.value = '';
    };

    render() {
        const {toDos, visibiltyFilter} = this.props;
        let filtredTodos;
        switch (visibiltyFilter) {
            case 'ALL_TODOS':
                filtredTodos = toDos;
                break;
            case 'ALL_ACTIVE_TODOS':
                filtredTodos = toDos.filter(todo => !todo.completed);
                break;
            case 'ALL_COMPLETED_TODOS':
                filtredTodos = toDos.filter(todo => todo.completed);
                break;
            default:
                filtredTodos = toDos;
        }
        return (
            <>
                <div>
                    <input type="text" ref={node => {
                        this.input = node
                    }}/>
                    <button onClick={this.handleClick}>Add todo</button>
                </div>
                <ul>
                    {filtredTodos.map((toDo) => {
                        return <ToDo key={toDo.id} id={toDo.id} text={toDo.text} completed={toDo.completed}/>
                    })}
                </ul>
                <div>
                    SHOW :
                    <FilterLink filter="ALL_TODOS">
                        ALL
                    </FilterLink>
                    {', '}
                    <FilterLink filter="ALL_ACTIVE_TODOS">
                        Active
                    </FilterLink>
                    {', '}
                    <FilterLink filter="ALL_COMPLETED_TODOS">
                        Completed
                    </FilterLink>
                </div>
            </>
        );
    }
}

export default ToDoApp;