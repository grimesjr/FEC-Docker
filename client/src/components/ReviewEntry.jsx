import React from 'react';
import styles from '../ReviewEntry.css';
import Stars from './Stars.jsx';
import ReviewPictures from './ReviewPictures.jsx'
import UserInfo from './UserInfo.jsx';
import PopoverPics from './PopoverPics.jsx';

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      user: {},
      review: {},
    }
  }

  componentDidMount() {
    let data = this.props.review;
    let userInfo = {
      name: data.name,
      location: data.location,
      elite: data.elite,
      friend: data.friends,
      numPics: data.numPics,
      picture: data.picture,
      reviews: data.numReviews,
      date: data.date.split('T')[0],
    };

    this.setState({
      user: userInfo
    });
  };

  hoverChange() {
    this.setState({
      hover: !this.state.hover
    });
  };

  
  showPictures() {
    if(this.props.review.links !== null) {
      return <ReviewPictures links={this.props.review.links}/>
    }
  }

  render() {
    return (
      <div className={styles.reviewEntry_container} onMouseEnter={this.hoverChange.bind(this)} onMouseLeave={this.hoverChange.bind(this)}>
        <UserInfo userInfo={this.state.user} hover={this.state.hover}/>
        <div className={styles.review}>
          <div className={styles.starDate}>
            <div>
              <Stars stars={this.props.review.stars}/> 
            </div>
            <div>
              {this.state.user.date}
            </div>
          </div>
          <div>{this.props.review.review}</div>
          {this.showPictures()}
        </div>
      </div>
  )}
}

export default ReviewEntry;