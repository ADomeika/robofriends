import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../MainPage';
import CardList from '../CardList';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe('<MainPage />', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should filter robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'john',
          email: 'john@gmail.com',
        },
      ],
      searchField: 'a',
      isPending: false,
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);

    expect(wrapper2.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([]);
  });

  it('should filter robots correctly 2', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'john',
          email: 'john@gmail.com',
        },
      ],
      searchField: 'john',
      isPending: false,
    };
    const wrapper3 = shallow(<MainPage {...mockProps3} />);

    expect(wrapper3.instance().filterRobots()).toEqual([
      {
        id: 3,
        name: 'john',
        email: 'john@gmail.com',
      },
    ]);
  });

  it('should not render <CardList /> if isPending is true', () => {
    const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: 'john',
      isPending: true,
    };
    const wrapper4 = shallow(<MainPage {...mockProps4} />);
    expect(wrapper4.find(<CardList />)).toHaveLength(0);
  });
});
