import React from 'react';
import Todo from '../components/Todo';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import initialState from '../store/initialState';

const mockStore = configureStore();
const store = mockStore(initialState);

configure({ adapter: new Adapter() });

describe('todo item', () => {
  it('should apply completed class for completed todo', () => {
    const todoDone = { ...initialState.todos[0] };
    todoDone.completed = true;
    const wrapper = shallow(<Todo store={store} todo={todoDone} />).dive();
    expect(wrapper.find('.completed').exists()).toBe(true);
  });
});
