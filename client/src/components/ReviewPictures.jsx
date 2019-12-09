import React from 'react';
import styles from '../ReviewPictures.css'
import PopoverPics from './PopoverPics.jsx';

class ReviewPictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopover: false,
      selectedPic: 0
    }
  }

  togglePopover() {
 
    this.setState({
      showPopover: !this.state.showPopover,
      selectedPic: arguments[0]
    })
  }

  handlePopOver() {
    if(this.state.showPopover === true) {
      return <PopoverPics links={this.props.links} togglePopover={this.togglePopover.bind(this)} selected={this.state.selectedPic}/>
    }
  }

  returnPictures(){
    let links = this.props.links.split(',');
    if (links.length === 1) {
      return (
        <div>
          <div className={styles.pics_container1} >
            <img src={links[0]} className={styles.pics1} onClick={this.togglePopover.bind(this, 0)}></img>
          </div>
        </div>
      )
    } else if (links.length === 2) {
      return (
        <div className={styles.pics_container2}>
          <div className={styles.pics_container_smaller}>
            <img src={links[0]} className={styles.pics2} onClick={this.togglePopover.bind(this, 0)}></img>
          </div>
          <div className={styles.pics_container_smaller}>
            <img src={links[1]} className={styles.pics2} onClick={this.togglePopover.bind(this, 1)}></img>
          </div>
        </div>
               
      )
    } else if (links.length >= 3) {
      return (
        <div>
          <div className={styles.pics_container1} >
            <img src={links[0]} className={styles.pics1} onClick={this.togglePopover.bind(this, 0)}></img>
          </div>
          <div className={styles.pics_container2}>
            <div className={styles.pics_container_smaller}>
              <img src={links[1]} className={styles.pics2} onClick={this.togglePopover.bind(this, 1)}></img>
            </div>
            <div className={styles.pics_container_smaller}>
              <img src={links[2]} className={styles.pics2} onClick={this.togglePopover.bind(this, 2)}></img>
            </div>
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
      {this.handlePopOver()}
    </div>
    )}
}

export default ReviewPictures;