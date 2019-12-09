import React from 'react'
import styles from '../SubmitReviewPop.css';
import axios from 'axios';



export class SubmitReviewPop extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    let img = e.target.file.files[0];
    let fd= new FormData();
  
    fd.append('image', img);
  
    axios.post('/uploadAWS', fd)
      .then(resp => {
         console.log(resp);
      })
    

  }

  render() {
    return (
      <div className={styles.fullPage}>
        <div className={styles.review_container}>review
          <div>

          </div>
          <div>

          </div>
          <textarea className={styles.textarea}></textarea>
        </div><br/>
        <div>Attach Photos(optional)</div><br/>
        <form onSubmit={this.handleSubmit}>
          <input type='file' name='file' className={styles.selectFile}></input>
          <input type='submit'/>
        </form>

      </div>
    )
  }
}

export default SubmitReviewPop
