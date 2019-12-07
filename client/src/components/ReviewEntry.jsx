import React from 'react';
import styles from '../ReviewEntry.css';
import HoverLinks from './HoverLinks.jsx';
import Stars from './Stars.jsx';
import ReviewPictures from './ReviewPictures.jsx'
import PopoverPics from './PopoverPics.jsx';

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      user: {},
      review: {},
      showPopover: false,
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
      reviews: data.numReviews
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

  handleHover() {
    if(this.state.hover === true) {
      return <HoverLinks />
    }
  };
  showPictures() {
    if(this.props.review.links !== null) {
      return <ReviewPictures links={this.props.review.links}/>
    }
  }
  togglePopover() {
    this.setState({
      showPopover: !this.state.showPopover,
    })
  }
  handlePopOver() {
    if(this.state.showPopover === true) {
      return <PopoverPics/>
    }
  }

  render() {
    return (
      <div className={styles.reviewEntry_container} onMouseEnter={this.hoverChange.bind(this)} onMouseLeave={this.hoverChange.bind(this)}>
        {/* <button onClick={this.togglePopover.bind(this)}>Popover</button> */}
        {this.handlePopOver()}
        <div className={styles.user}>
          <div>
            <div className={styles.userPic_container}>
                <img src={this.state.user.picture} className={styles.userPic}/>
            </div>
            <div className={styles.userInfo_container}> 
                <div className={styles.userName}>{this.state.user.name}</div>
                <div><b>{this.state.user.location}</b></div>
                <div><b>{this.state.user.friend}</b> friends</div>
                <div><b>{this.state.user.reviews}</b> reviews</div>
                <div><b>{this.state.user.numPics}</b> photos</div>
            </div>
          </div>  
          <div className={styles.hover_container}>
            {this.handleHover()}
          </div>
        </div>
        <div className={styles.review}>
          <div>
            <Stars stars={this.props.review.stars}/>
          </div><br/>
          <div>{this.props.review.review}</div>
          {/* {this.showPictures()} */}
        </div>
      </div>
  )}
}

export default ReviewEntry;