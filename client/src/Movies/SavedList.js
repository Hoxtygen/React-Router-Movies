import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Movie from './Movie';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
           <Link to={`/movies/${movie.id}`} key = {movie.id}>
           <span className="saved-movie">{movie.title}</span>
         </Link>
        ))}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

// {this.props.list.map(movie => 
//   <Link to={movie}>
//     <span className="saved-movie">{movie.title}</span>
//   </Link>
  
// )}

/**
 * 
 * <span className="saved-movie">{movie.title}</span>
 */
