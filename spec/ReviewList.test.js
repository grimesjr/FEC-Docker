import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from '../client/src/components/ReviewList';
import { exportAllDeclaration } from '@babel/types';
import ReviewEntry from '../client/src/components/ReviewEntry';

describe('<ReviewList />', () => {
  it('Should render component ReviewList', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ReviewList/>', () => {
  it('renders two <ReviewsEntry/>', () => {
    const data = [{'test':'test'}, {'test':'test'}];
    const wrapper = shallow(<ReviewList data={data}/>);
    exportAllDeclaration(wrapper.find(ReviewEntry)).to.have.lengthOf(2);
  });
});