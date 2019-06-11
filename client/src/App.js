import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <Router>
        <div>
          <SavedList list={this.state.savedList} />
          <Route exact path= "/" component = {MovieList}/>
          <Route render = {props => <Movie {...props} addToSavedList = {this.addToSavedList} />}
          exact path = "/movies/:id" 
          />
      </div>
      </Router>
      
    );
  }
}

/**
 * 
 * <Route render={(props) => (
  <MyComponent 
    someProp={someData} 
    someOtherProp={moreData} 
    match={props.match}
    history={props.history}
    location={props.location}
  />
)} />
 * 
 * 
 * 
 */