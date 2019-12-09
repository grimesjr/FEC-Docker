import React from 'react'
import UserInfo from './UserInfo.jsx';
import styles from '../LoggedInUser.css';
import SubmitReviewPop from './SubmitReviewPop.jsx';

export class LoggedInUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      PostReview: false,
    }
  }

  togglePostReview() {
    this.setState({
      PostReview: !this.state.PostReview,
    });
  } 

  showSubmitReview() {

    if(this.state.PostReview) {
      return <SubmitReviewPop togglePostReview={this.togglePostReview.bind(this)}/>
    }
  }

  render() {
    return (
      <div className={styles.user_container}>
        <div>
          <UserInfo userInfo={this.props.userInfo} hover={this.props.hover}/>
        </div>
        <div className={styles.postReview}>
          <div className={styles.post_container}>
            <div className={styles.stars}></div>
            <div className={styles.startReview} onClick={this.togglePostReview.bind(this)}><br/>Start review on {this.props.restName}</div>
          </div>
        </div>
        {this.showSubmitReview()}
      </div>
    )
  }
}

export default LoggedInUser
