import React from 'react';
import './SearchBar.css';




let getSortByClass = '';
let handleSortByChange = '';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            'Best Match' : 'best_match',
            'Highest Rated' : 'rating',
            'Most Reviewed' : 'review_count'
        };
    }
    
    
    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this._renderSortByOptions(this.sortByOptions)}
                    </ul>
                </div>
                    <div className="SearchBar-fields form-item message-error" data-tooltip="what do you wanna eat and where in the world">
                    <input onChange={this._handleTermChange} placeholder="What are you in the mood for?" />
                    <input onChange={this._handleLocationChange} placeholder="Where in the world?" />
                </div>
                <div onClick={this._handleSearch} className="SearchBar-submit">
                    <a>Let’s Go!</a>
                </div>
            </div>
        );
    };

    // _ denotes different types of methods/functions after render because these functions are not part of the life cycle
    _renderSortByOptions = (object) => {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption]
            return (<li 
                className={this._getSortByClass(sortByOptionValue)}
                onClick={this._handleSortByChange.bind(this, sortByOptionValue)}
                key={sortByOptionValue}>
                {sortByOption}
            </li>)
        });
    }
    _getSortByClass = (sortByOption) => {
        if(this.state.sortBy === sortByOption){
            return 'active'
        } else {
            return ''
        };
    }
    _handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption});
    }
    _handleTermChange = (e) =>{
        this.setState({
            term: e.target.value
        });
    }
    _handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    _handleSearch = (e) => {
        let adress = this.state.location;
        let choix = this.state.term;
        if((adress == '')||(choix == ''))
          {
              return( alert('Missing informations'));
          }
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();
        //console.log(_handleSearch);
    }
};


export default SearchBar;


//The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed)
// This is to help future proof against potential changes to the Yelp API.
//The method should iterate through the keys and values of the sortByOptions object and return a list item. The list item elements should use the keys as an attribute, and the values as content. 

// stores object values in a variable. then access the sortByOptions values using the sortByOption parameter of the callback function.
