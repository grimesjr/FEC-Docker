import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import ReviewEntry from './ReviewList.jsx';
import HoverLinks from './HoverLinks.jsx';
import regeneratorRuntime from "regenerator-runtime";


class YelpReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restName: 'RM 212',
      reviewsInfo: [],
      hover: false
    }
  }

  //name should be passed down as props, now just for testing
  //get returns an array of objects
  async componentDidMount() {
    let name = this.state.restName;
    let url = '/restaurantReviews/' + name;
    let data = await axios.get(url)
    this.setState({
        reviewsInfo: data
    })
  }

  hoverChange() {
    this.setState({
      hover: !this.state.hover
    });
  }

  handleHover() {
    if(this.state.hover === true) {
      return <HoverLinks />
    }
  }

  handleSearchInput(search) {
    console.log(search);
  }


  render() {
    return (
    <div className='reviews_container' onMouseEnter={this.hoverChange.bind(this)} onMouseLeave={this.hoverChange.bind(this)}>
      <Search handleSearchInput={this.handleSearchInput.bind(this)}/>
      <ReviewEntry info={this.state.reviewsInfo}/>
      {this.handleHover()}
    </div>
    )}
}

export default YelpReviews;