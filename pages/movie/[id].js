import React from 'react'
import Poster from '../../components/Poster';
import { setYear } from '../../utils/helpers'
import styled from 'styled-components'

const MovieInfoStyles = styled.div`
  display: inline-flex;
  gap: 25px;
  margin-bottom: 15%;

  .movie-title {
    margin-top: 0;
  }

  .sub-heading {
    margin-bottom: 0;
  }

  p {
    margin-top: 5px;
  }
`

const Movie = ({ data }) => {
  const {
    title,
    overview,
    video,
    release_date,
    genre_ids,
    original_language
  } = data;

  return (
    <div className="app-container">
      <MovieInfoStyles>
        <Poster data={data} />

        <div className="movie-contents">
          <h2 className="movie-title">{title} ({setYear(release_date)})</h2>
          <h4 className="sub-heading">Overview</h4>
          <p>{overview}</p>
        </div>
      </MovieInfoStyles>
    </div>

  )
}


export async function getStaticPaths() {
  const res = await fetch('https://api.themoviedb.org/3/movie/now_playing/?api_key=cf51a46c6ac26bd4f4c55018fdad298d')
  const movies = await res.json()

  const paths = movies.results.map(movie => ({
    params: { id: movie.id.toString() }
  }));

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=cf51a46c6ac26bd4f4c55018fdad298d`)
  const data = await res.json()

  return { props: { data } }
}


export default Movie;
