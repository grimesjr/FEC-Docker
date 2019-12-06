import React from 'react';
import styles from '../HoverLinks.css';

function HoverLinks(props) {
  return (
    <div>
      <div className={styles.hoverlinks}>
        <div>
          <div className={styles.icon_border}>
            <div className={styles.icon_container}>
              <img className='icon_image' src='https://yelpicons.s3-us-west-1.amazonaws.com/share.png'/>
            </div>
          </div>
            <div className={styles.links}>
              <span>Share Review</span>
            </div>
        </div>
        <div>
          <div className={styles.icon_border}>
            <div className={styles.icon_container}>
              <img className='icon_image' src='https://yelpicons.s3-us-west-1.amazonaws.com/embed.png'/>
            </div>
          </div>
            <div className={styles.links}>
              <span>Embed Review</span>
            </div>
        </div>
        <div>
          <div className={styles.icon_border}>
            <div className={styles.icon_container}>
              <img className='icon_image' src='https://yelpicons.s3-us-west-1.amazonaws.com/compliment.png'/>
            </div>
          </div>
            <div className={styles.links}>
              <span>Compliment</span>
            </div>
        </div>
        <div>
          <div className={styles.icon_border}>
            <div className={styles.icon_container}>
              <img className='icon_image' src='https://yelpicons.s3-us-west-1.amazonaws.com/message.png'/>
            </div>
          </div>
            <div className={styles.links}>
              <span>Send Message</span>
            </div>
        </div>
        <div>
          <div className={styles.icon_border}>
            <div className={styles.icon_container}>
              <img className='icon_image' src='https://yelpicons.s3-us-west-1.amazonaws.com/follow.png'/>
            </div>
          </div>
            <div className={styles.links}>
              <span>Follow</span>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default HoverLinks;