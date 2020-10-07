import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../CardList';

const mockRobots = [
  {
    id: 1,
    name: 'Test Tester',
    username: 'TeTester',
    email: 'test@test.com',
  },
];

describe('<CardList />', () => {
  it('should render', () => {
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
});
