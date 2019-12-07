import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className='review_container'>
      {this.props.reviews.map(review => <ReviewEntry review={review} hover={this.props.hover}/>)}
    </div>
    )}
}

export default ReviewList;
