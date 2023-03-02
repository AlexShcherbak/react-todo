import React from 'react';
import Todo from './Todo/Todo';

const TodoList = (props) => {
    return (
        <>
            { 
                props.todos.map((x, i) => <div key={i}><Todo todo={x} /></div>) 
            }
        </>
    )
}

export default TodoList