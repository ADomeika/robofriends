import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';

describe('<Card />', () => {
  it('should render', () => {
    expect(shallow(<Card item={{}} />)).toMatchSnapshot();
  });
});
