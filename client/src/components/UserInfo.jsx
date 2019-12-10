import React from 'react'
import styles from '../UserInfo.css';
import HoverLinks from './HoverLinks.jsx';

export class UserInfo extends React.Component {

  handleHover() {
    if(this.props.hover) {
      return <HoverLinks />
    }
  };

  render() {
    let user = this.props.userInfo;
    return (
      <div className={styles.user}>
        <div>
          <div className={styles.userPic_container}>
              <img src={user.picture} className={styles.userPic}/>
          </div>
          <div className={styles.userInfo_container}> 
              <div className={styles.userName}>{user.name}</div>
              <div><b>{user.location}</b></div>
              <div><b>{user.friend}</b> friends</div>
              <div><b>{user.reviews}</b> reviews</div>
              <div><b>{user.numPics}</b> photos</div>
          </div>
        </div>  
        <div className={styles.hover_container}>
          {this.handleHover()}
        </div>
      </div>
    )
  }
}

export default UserInfo
