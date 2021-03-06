import React from 'react';
import styles from '../PopoverPics.css';
// import icon from './icons/wrapper.jsx';


export class PopoverPics extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      links: [],
      currentPic: '', 
    }
  }

  componentDidMount() {
    let linksArr = this.props.links.split(',');
    let selected = this.props.selected;
    this.setState({
      links: linksArr,
      currentPic: linksArr[selected]
    })

  }

  handleChangeClick(link) {
    this.setState({
      currentPic: link,
    });
  }

  handleClick(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className={styles.fullPage} onClick={this.props.togglePopover}>
        <div className={styles.wrapper} onClick={this.handleClick}>
          <div className={styles.picture_container}>
            <img src={this.state.currentPic} className={styles.foodPic}/>
            <div className={styles.arrow}></div>
          </div>
          <div className={styles.photoGallery}>
            <div className={styles.header}>
              Restaurant Name
            </div>
            <div className={styles.pictures}>
              {this.state.links.map(link => (
                <div className={styles.pictures_container} onClick={() => this.handleChangeClick(link)}>
                  <img src={link} className={styles.picture}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PopoverPics
