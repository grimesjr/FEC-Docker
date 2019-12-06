import React from 'react';
import styles from '../ReviewEntry.css';
import HoverLinks from './HoverLinks.jsx';
import Stars from './Stars.jsx';
import Icons from './icons/wrapper.jsx';


class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
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


  render() {
    return (
    <div className={styles.reviewEntry_container} onMouseEnter={this.hoverChange.bind(this)} onMouseLeave={this.hoverChange.bind(this)}>
      <div className={`${styles.user} ${styles.box}`}>
        
          <img src='https://yelpfoodpics.s3-us-west-1.amazonaws.com/0.jpg' className={styles.image} />
  

      </div>
      <div className={`${styles.review} ${styles.box}`}>2</div>
      <div className={`${styles.empty} ${styles.box}`}>3</div>
    </div>
    )}
}

export default ReviewEntry;