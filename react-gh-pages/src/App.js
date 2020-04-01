
import React from 'react';
import './App.css';
import Business from './components/Business/Business.js';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Error from './components/SearchBar/HandleError.js';

import Yelp from './util/Yelp.js';
//import Yelp from '../../util/Yelp';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }
  render() {
    return (
      <div className="App">
        <h1>PARIS DeLiCiOuS</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
export default App;




//old
/*import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Business from './components/Business/Business.js';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Error from './components/SearchBar/HandleError.js';

import Yelp from './util/Yelp.js';



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            businesses: [],
            message: ""
        }
    }

    searchYelp = (term, location, sortBy) => {
        if (!location || !term){
            this.setState({
                message: "Please enter a location and term."
            })
        } else {
            Yelp.search(term, location, sortBy).then(businesses => {
                if(businesses.length > 0){
                  return businesses; //businesses: [];
                }
                this.setState({
                    businesses: businesses,
                    message: ""
                });
            });
        };
    }  

    render() {
        return (
            <div className="App">
                <h1>PARIS DeLICiOUS</h1>
                <SearchBar searchYelp={this.searchYelp}/>
                <Error errorMessage={this.state.message}/>
                <BusinessList businesses={this.state.businesses}/>
            </div>
        );
    }
};

export default App;
*/
