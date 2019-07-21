import React from "react";
import {store} from "../../index";


const handleClick = (event, filter) => {
    event.preventDefault();
    store.dispatch({type: "SET_VISIBILITY", filter});
};

const FilterLink = (props) => {
    const {visibiltyFilter} = store.getState();
    const {filter} = props;
    return <a href="#" onClick={(event) => handleClick(event, filter)}
              style={filter === visibiltyFilter ? {textDecoration: 'none', color: '#000'} : {}}>
        {props.children}
    </a>
};

export default FilterLink;