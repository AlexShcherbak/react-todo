import React, { useState } from 'react';
import { connect } from 'react-redux'
import actionCreators from '../../store/actionCreators';
import TodoList from '../TodoList';
import ConfirmBtn from '../ConfirmBtn/ConfirmBtn';
import { Header, AddContainerInput, Content } from './Styles';

const Main = (props) => {

    const { addTodo, clearAll, todos } = props;

    const [description, setDescription] = useState('');

    function addTodoClicked() {
        addTodo({ text: stringOrDefault(description, 'new item') });
        setDescription('');
    }

    function clearAllClicked() {
        clearAll();
    }

    function descriptionChanged(e) {
        if (!e.target.value) return;

        setDescription(e.target.value);
    };

    function keyDown(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    function stringOrDefault (text, defaultText) {
        return text !== '' ? text : defaultText;
    };

    return (
        <>
            <Content>
                <Header>
                    stuff to do
                </Header>
                <div>
                    <AddContainerInput type="text" id="txtTodo" onKeyDown={keyDown} placeholder="what do you need to do?" value={description} onChange={(e) => { descriptionChanged(e) }} />
                    <AddContainerInput type="button" id="btnAdd" className="btn" onClick={addTodoClicked} value="add todo" disabled={!description} />
                </div>
                <TodoList todos={todos} />
                {
                    todos.length ?
                    <ConfirmBtn buttonText="Clear all your todos?" action={clearAllClicked} />
                    : null
                }
            </Content>
        </>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(actionCreators.addTodo(todo)),
    clearAll: () => dispatch(actionCreators.clearAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
