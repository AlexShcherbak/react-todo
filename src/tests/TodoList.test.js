import React from 'react';
import TodoList from '../components/TodoList';
import Todo from '../components/Todo';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import initialState from '../store/initialState';

configure({ adapter: new Adapter() });

describe('todo list', () => {
  it('should render todo items', () => {
    const wrapper = shallow(<TodoList todos={initialState.todos} />);
    expect(wrapper.find(Todo).exists()).toBe(true);
  });
});
