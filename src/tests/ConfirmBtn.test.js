import React from 'react';
import ConfirmBtn from '../components/ConfirmBtn';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('main', () => {
  it('should render', () => {
    shallow(<ConfirmBtn  />);
  });

  it('should display confirm message passed in', () => {
    const testConfirmText = 'test confirm message';
    const wrapper = shallow(<ConfirmBtn buttonText = {testConfirmText} />);
    var button = wrapper.find('#btnMain');
    expect(button.prop('value')).toEqual(testConfirmText);
  });

  it('should display yes/no buttons when button clicked', () => {
    const wrapper = shallow(<ConfirmBtn />);
    wrapper.find('#btnMain').simulate('click');
    expect(wrapper.find('.confirm-yes').exists()).toBe(true);
    expect(wrapper.find('.confirm-no').exists()).toBe(true);
  });

  it('should run confirm action once when clicking confirm', () => {
    var confirmFunc = jest.fn();
    const wrapper = shallow(<ConfirmBtn action={confirmFunc} />);
    wrapper.find('#btnMain').simulate('click');
    wrapper.find('.confirm-yes').simulate('click');
    expect(confirmFunc).toHaveBeenCalled();
  })

  it('should return to default state when cancel is clicked', () => {
    const wrapper = shallow(<ConfirmBtn />);
    wrapper.find('#btnMain').simulate('click');
    wrapper.find('.confirm-no').simulate('click');
    expect(wrapper.find('#btnMain').exists()).toBe(true);
    expect(wrapper.find('.confirm-no').exists()).toBe(false);
    expect(wrapper.find('.confirm-yes').exists()).toBe(false);
  })
});
