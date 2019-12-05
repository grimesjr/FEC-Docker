import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }
  handleInput({target: {name, value}}) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearchInput(this.state.search);
  }

  render() {
    return (
    <div className='search_input'>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input name='search' type='text' placeholder='Search within reviews' onChange={this.handleInput.bind(this)}></input>
        <button type='submit'>Search</button>
      </form>
    </div>
  )}
}

export default Search;