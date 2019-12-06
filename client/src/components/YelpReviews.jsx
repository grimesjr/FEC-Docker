import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import ReviewList from './ReviewList.jsx';
import regeneratorRuntime from "regenerator-runtime";
import styles from '../YelpsReviews.css';


class YelpReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restName: 'Miss SaiGon',
      reviewsInfo: [],
    }
  }

  //name should be passed down as props, now just for testing
  //get returns an array of objects
  async componentDidMount() {
    let name = this.state.restName;
    let url = '/restaurantReviews/' + name;
    let data = await axios.get(url)
    this.setState({
        reviewsInfo: data.data
    })
  }

  handleSearchInput(search) {
    console.log(search);
  }

  render() {
    return (
    <div>
      <Search handleSearchInput={this.handleSearchInput.bind(this)}/>
      <ReviewList reviews={this.state.reviewsInfo} hover={this.state.hover}/>
    </div>
    )}
}

export default YelpReviews;