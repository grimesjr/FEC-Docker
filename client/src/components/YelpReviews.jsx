import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import ReviewList from './ReviewList.jsx';
import PopoverPics from './PopoverPics.jsx';
import regeneratorRuntime from "regenerator-runtime";
import styles from '../YelpsReviews.css';


class YelpReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restName: 'Miss SaiGon',
      reviewsInfo: [],
      showPopover: false,
      testingLinks: "https://yelpfoodpics.s3-us-west-1.amazonaws.com/53.jpg,https://yelpfoodpics.s3-us-west-1.amazonaws.com/44.jpg,https://yelpfoodpics.s3-us-west-1.amazonaws.com/52.jpg,https://yelpfoodpics.s3-us-west-1.amazonaws.com/43.jpg"
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

  togglePopover() {
    this.setState({
      showPopover: !this.state.showPopover,
    })
  }
  handlePopOver() {
    if(this.state.showPopover === true) {
      return <PopoverPics links={this.state.testingLinks}/>
    }
  }

  render() {
    return (
    <div>
      <Search handleSearchInput={this.handleSearchInput.bind(this)}/>
      <button onClick={this.togglePopover.bind(this)}>Popover</button> 
      {this.handlePopOver()}
      <ReviewList reviews={this.state.reviewsInfo} hover={this.state.hover}/>
    </div>
    )}
}

export default YelpReviews;