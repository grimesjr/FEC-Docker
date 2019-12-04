import React from 'react';
import { shallow } from 'enzyme';

import YelpReviews from './YelpReviews';

describe('<YelpReviews />', () => {
  it('Should render component YelpReviews', () => {
    const wrapper = shallow(<YelpReviews />);
    expect(wrapper).toMatchSnapshot();
    
  });
});