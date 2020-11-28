import React from 'react'
import Details from './Details'

export default function MoviesList({ movies }) {

  const currentPageData = movies
    // .sort((a, b) => b.popularity - a.popularity)
    .map(movie => (
      <Details
        key={movie.id}
        data={movie}
      />
    ))

  return (
    <ul className="movies-list">
      {currentPageData}
    </ul>
  )
}
