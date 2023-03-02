import React from 'react';
import Main from '../components/main';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import initialState from '../store/initialState';

const mockStore = configureStore();
const store = mockStore(initialState);

configure({ adapter: new Adapter() });

describe('main', () => {
  it('should render', () => {
    shallow(<Main store={store} />);
  });

  it('should enable add todo button when description added', () => {
    const wrapper = shallow(<Main store={store} />).dive().dive();
    wrapper.find('#txtTodo').simulate('change', { target: { value: 'Hello' } });
    expect(wrapper.find('#btnAdd').prop('disabled')).toBe(false);
  });
});
