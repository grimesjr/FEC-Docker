import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }


  render() {
    return (
    <div className='review_container'>
      <ReviewEntry />
    </div>
    )}
}

export default ReviewList;
