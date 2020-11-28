import React from 'react'
import Link from 'next/link'
import { setYear, convertToSlug } from '../utils/helpers'
import styled from 'styled-components'
import Ratings from './Ratings';

const DetailsStyles = styled.li`
    transform: scale(0.85);
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1);
    }

    h2 {
      font-size: 1.125rem;
      line-height: 1.15rem;
    }

    p {
      font-size: 0.85rem;
      position: relative;
    }
`

export default function Details({ data }) {
  const {
    id,
    poster_path,
    title,
    release_date,
    adult,
    vote_average,
  } = data;

  const ratings = vote_average * 10;
  const slug = convertToSlug(title);

  return (
    <Link href={`/movie/${id}`}>
      <DetailsStyles>
        {poster_path
          ? <img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt={title} />
          : <img src="https://via.placeholder.com/185x278/000000/FFFFFF/?text=Poster+Unavailable" alt={title} />
        }

        <h2>{title} ({setYear(release_date)})</h2>
        {ratings ?
          <Ratings ratings={ratings} /> :
          <span>No ratings available</span>
        }
        {adult && <p>Adult rated</p>}
      </DetailsStyles>
    </Link>
  )
}
