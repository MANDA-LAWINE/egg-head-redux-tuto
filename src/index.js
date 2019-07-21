import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import ToDoApp from "./components/ToDoApp";


// combine reducers re-implementation
// know your tools ☺
const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](state[key], action);
                return nextState;
            },
            {} // nextState initial value
        )
    };
};

const toDo = (state = {}, {type, toDo = {}}) => {
    const {id = null, text = null} = toDo;
    switch (type) {
        case "ADD_TODO" :
            return {
                id,
                text,
                completed: false
            };
        case "TOGGLE_TODO":
            if (id !== state.id) return state;
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const toDos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO" :
            return [
                ...state,
                toDo(undefined, action)
            ];
        case "TOGGLE_TODO":
            return state.map(
                t => toDo(t, action)
            );
        default:
            return state;
    }
};

// reducer responsible for toDos visibility
const visibiltyFilter = (state = "ALL_TODOS", {type, filter}) => {
    switch (type) {
        case "SET_VISIBILITY":
            return filter;
        default:
            return state;
    }
};


// pure function
const rootReducer = combineReducers({
    toDos,
    visibiltyFilter
});

const store = createStore(rootReducer);

const render = () => (
    ReactDOM.render(
        <ToDoApp {...store.getState()}/>
        , document.getElementById('root')
    )
);

store.subscribe(render);
render();

export {store};