import React from 'react';

class SearchBar extends React.Component {

  state={ term: ''};

  onInputChange = (event) => {
    this.setState( {term: event.target.value})
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term); // It tells the parent component (App) what the search term is
  };

  render() {
    return (
        <div className='search-bar ui segment'>
          <form onSubmit={this.onFormSubmit} className='ui form'>
            <div className='field'>
              <label>Search: </label>
              <div className='ui icon input'>
                <input
                    onChange={this.onInputChange}
                    type='text'
                    value={this.state.term} />
                <i onClick={this.onFormSubmit} className='search link icon'/>
              </div>
            </div>
          </form>

        </div>
    );
  }
}

export default SearchBar;