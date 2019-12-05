import React from 'react';
import { shallow } from 'enzyme';

import YelpReviews from '../client/src/components/YelpReviews';
import HoverLinks from '../client/src/components/HoverLinks';

describe('<YelpReviews />', () => {
  it('Should render component YelpReviews', () => {
    const wrapper = shallow(<YelpReviews />);
    expect(wrapper).toMatchSnapshot();
    
  });
});

describe('<YelpReviews />', () => {
  it('Renders <HoverLinks /> when hover over YelpReviews', () => {
    const wrapper = shallow(<YelpReviews />);

    expect(wrapper.state('hover')).toBe(false);
    wrapper.simulate('mouseenter');

    expect(wrapper.state('hover')).toBe(true);
    expect(wrapper.find(HoverLinks)).to.have.lengthOf(1);
    wrapper.simulate('mouseleave');

    expect(wrapper.state('hover')).toBe(false);
  });
});

