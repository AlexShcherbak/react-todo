import * as actionTypes from './actionTypes';

const actionCreators = {
    addTodo: todo => ({ type: actionTypes.ADD_TODO, todo }),
    updateTodo: todo => ({ type: actionTypes.UPDATE_TODO, todo }),
    deleteTodo: id => ({ type: actionTypes.DELETE_TODO, id }),
    clearAll: () => ( { type: actionTypes.CLEAR_ALL })
}

export default actionCreators;
