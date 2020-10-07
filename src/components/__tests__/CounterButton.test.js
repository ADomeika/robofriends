import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from '../CounterButton';

describe('<CounterButton />', () => {
  it('should match snapshot', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  it('should correctly increment counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);

    wrapper.find('#counter').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });

    wrapper.find('#counter').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });

    expect(wrapper.props().color).toBe(mockColor);
  });
});
