import expect from 'expect';
import reducer from '../store/reducer';
import initialState from '../store/initialState';
import actionCreators from '../store/actionCreators';

describe('test reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should add an item', () => {
        //let state = { ...initialState }; // wrong! this splits all elements out into objects. todos becomes { ... } rather than [ ... ]
        const todo = { id: 1, text: 'test todo', completed: false };
        const action = actionCreators.addTodo(todo);
        
        const expected = {
            todos: [ ...initialState.todos, todo ]
        };

        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should update an item', () => {
        const todo = { id: 0, text: 'text changed', completed: true };
        const action = actionCreators.updateTodo(todo);

        const expected = { 
            todos: [ todo ]
         };

        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should delete a todo', () => {
        const action = actionCreators.deleteTodo(0);

        const expected = { ...initialState };
        expected.todos = [];

        expect(reducer(initialState, action)).toEqual(expected);
    });
});
