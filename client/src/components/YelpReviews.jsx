import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import ReviewEntry from './ReviewList.jsx';


class YelpReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restName: 'RM 212',
      reviewsInfo: []
    }
  }

  //name should be passed down as props, now just for testing
  //get returns an array of objects
  componentDidMount() {
    let name = this.state.restName;
    let url = '/restaurantReviews/' + name;
    axios.get(url)
    .then(data => {
      this.setState({
        reviewsInfo: data
      });
    })
    .catch(err => console.log('error retrieving data', err))
  }




  render() {
    return (
    <div className='reviews_container'>
      <Search />
      <ReviewEntry info={this.state.reviewsInfo}/>
    </div>
    )}
}

export default YelpReviews;