import React from 'react';

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

  returnStar(){
    let stars = this.props.stars;
    if (stars === 1) {
      return <img src='https://yelpicons.s3-us-west-1.amazonaws.com/regular_1.png'/>
    } else if (stars === 2) {
      return <img src='https://yelpicons.s3-us-west-1.amazonaws.com/regular_2.png'/>
    } else if (stars === 3) {
      return <img src='https://yelpicons.s3-us-west-1.amazonaws.com/regular_3.png'/>
    } else if (stars === 4) {
      return <img src='https://yelpicons.s3-us-west-1.amazonaws.com/regular_4.png'/>
    } else if (stars === 5) {
      return <img src='https://yelpicons.s3-us-west-1.amazonaws.com/regular_5.png'/>
    }
  }

  render() {
    return (
    <div className='stars_container'>
      {this.returnStar()}
    </div>
    )}
}

export default Stars;