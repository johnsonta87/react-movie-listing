import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Ratings from './Ratings';

const PosterStyles = styled.div`
    position: relative;

    h2 {
      font-size: 1.125rem;
      line-height: 1.15rem;
    }

    p {
      font-size: 0.85rem;
      position: relative;
    }
`

export default function Poster({ data }) {
  const {
    id,
    poster_path,
    title,
    vote_average,
  } = data;

  const ratings = vote_average * 10;

  return (
    <Link href={`/movie/${id}`}>
      <PosterStyles>
        {poster_path
          ? <img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt={title} />
          : <img src="https://via.placeholder.com/185x278/000000/FFFFFF/?text=Poster+Unavailable" alt={title} />
        }
        {ratings ?
          <Ratings ratings={ratings} /> :
          <span>No ratings available</span>
        }
      </PosterStyles>
    </Link>
  )
}
