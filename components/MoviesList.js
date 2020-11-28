import React from 'react'
import Poster from './Poster'
import { setYear } from '../utils/helpers'

export default function MoviesList({ movies }) {

  const currentPageData = movies
    // .sort((a, b) => b.popularity - a.popularity)
    .map(movie => (
      <div className="movie_list__item" key={movie.id}>
        <Poster
          data={movie}
        />

        <h2>{movie.title} ({setYear(movie.release_date)})</h2>
      </div>
    ))

  return (
    <div className="movies-list">
      {currentPageData}
    </div>
  )
}
