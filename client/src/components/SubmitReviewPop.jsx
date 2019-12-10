import React from 'react'
import styles from '../SubmitReviewPop.css';
import axios from 'axios';



class SubmitReviewPop extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    let img = e.target.file.files[0];
    console.log(img.name);
    AWS.upload(img.name);
  }

  handleClick(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className={styles.fullPage} onClick={this.props.togglePostReview}>
        <div className={styles.review_container} onClick={this.handleClick}>review
          <div>

          </div>
          <div>

          </div>
          <textarea className={styles.textarea}></textarea>
        <br/>
        <div>Attach Photos(optional)</div><br/>
        <form onSubmit={this.handleSubmit}>
          <input type='file' name='file' className={styles.selectFile}></input>
          <input type='submit'/>
        </form>
        </div>
      </div>
    )
  }
}

export default SubmitReviewPop
