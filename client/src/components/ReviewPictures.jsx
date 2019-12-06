import React from 'react';
import styles from '../ReviewPictures.css'

class ReviewPictures extends React.Component {
  constructor(props) {
    super(props);
  }

  returnPictures(){
    let links = this.props.links.split(',');
    if (links.length === 1) {
      return (
        <div>
          <div className={styles.pics_container1}>
            <img src={links[0]} className={styles.pics}></img>
          </div>
        </div>
      )
    } else if (links.length === 2) {
      return (
        <div>
          <div className={styles.pics_container2}>
            <img src={links[1]} className={styles.pics2}></img>
          </div>
          <div className={styles.pics_container2}>
            <img src={links[2]} className={styles.pics2}></img>
          </div>
        </div>
               
      )
    } else if (links.length >= 3) {
      return (
        <div>
          <div className={styles.pics_container1}>
            <img src={links[0]} className={styles.pics1}></img>
          </div>
          <div className={styles.pics_container2}>
            <img src={links[1]} className={styles.pics2}></img>
          </div>
          <div className={styles.pics_container2}>
            <img src={links[2]} className={styles.pics2}></img>
          </div>
          <div>See all pictures from ...</div>
        </div>
        
      )
    } 
  }

  render() {
    return (
    <div>
      {this.returnPictures()}
    </div>
    )}
}

export default ReviewPictures;