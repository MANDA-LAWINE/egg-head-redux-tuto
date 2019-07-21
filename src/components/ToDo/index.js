import React, {Component} from 'react';
import {store} from '../../index';

class ToDo extends Component {
    handleCLick = (toDo) => {
        store.dispatch({type: "TOGGLE_TODO", toDo});
    };

    render() {
        const {id, text, completed} = this.props;
        return (
            <li id={id} onClick={() => this.handleCLick({id})}
                style={completed === true ? {textDecoration: "line-through"} : {}}>
                {text}
            </li>
        );
    }
}

export default ToDo;