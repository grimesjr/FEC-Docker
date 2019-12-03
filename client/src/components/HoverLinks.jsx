import React from 'react';
import styles from '../YelpsReviews.css';

function HoverLinks(props) {
  return (
    <ul className={styles.hoverlinks}>
      <li className={styles.shareLink}>Share Review</li>
      <li>Embed Review</li>
      <li>Compliment</li>
      <li>Send message</li>
      <li>Follow </li>
    </ul>
  )
}

export default HoverLinks;