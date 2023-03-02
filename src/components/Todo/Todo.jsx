import React from 'react';
import { connect } from 'react-redux'
import actionCreators from '../../store/actionCreators';
import { TodoContainer, TodoItem, TodoControls, Btn } from './Styles';

const Todo = (props) => {

    const { todo, updateTodo, deleteTodo } = props;

    function completedChanged() {
        const todoCopy = { ...todo };
        todoCopy.completed = !todo.completed;
        updateTodo(todoCopy);
    }

    function remove() {
        deleteTodo(todo.id);
    }

    return (
        <TodoContainer completed={todo.completed} onClick={completedChanged}>
            <TodoItem>
                {todo.text}
            </TodoItem>
            <TodoControls>
                <Btn type="button" className="btn" value="X" onClick={remove}></Btn>
            </TodoControls>
        </TodoContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    updateTodo: todo => dispatch(actionCreators.updateTodo(todo)),
    deleteTodo: id => dispatch(actionCreators.deleteTodo(id))
})

export default connect(null, mapDispatchToProps)(Todo);
