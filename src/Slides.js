import React from 'react';


const Slides = (props) => {

  return(
    <div className="slides">
      <div className="slide">
      <h1>{props.user.name.first} {props.user.name.last}</h1>
      <div className="blueLine"></div>
        <h2>From:</h2><p>{props.user.city}, {props.user.country}</p><br></br>
        <h2>Job Title:</h2><p>{props.user.title}</p><br></br>
        <h2>Employer:</h2><p>{props.user.employer}</p><br></br>
        <br></br>
        <br></br>
        <h2>Favorite Movies:</h2>
          <ol className="movieList">
            <li className="movie">{props.user.favoriteMovies[0]}</li>
            <li className="movie">{props.user.favoriteMovies[1]}</li>
            <li className="movie">{props.user.favoriteMovies[2]}</li>
          </ol>



      </div>
    </div>
  )
}

export default Slides;