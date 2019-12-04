import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }


  render() {
    return (
    <div className='search_input'>
      <form>
        <input name='search' type='text' placeholder='Search within reviews'></input>
        <button type='submit'>Search</button>
      </form>
    </div>
    )}
}

export default Search;