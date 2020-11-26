import React from 'react'
import { setYear } from '../utils/helpers'
import styled from 'styled-components'

const DetailsStyles = styled.li`
    transform: scale(0.85);
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1);

      p {
        height: 350px;
      }
    }

    h2 {
      font-size: 1.125rem;
      line-height: 1.15rem;
    }

    p {
      font-size: 0.85rem;
      position: relative;
      height: 0;
      overflow: hidden;
      display: block;
      transition: height 0.4s ease-in;
    }

    .ratings {
      img {
        max-width: 20px;
      }

      span {
        font-weight: bold;
        font-size: 0.8rem;
        position: relative;
        top: -5px;
      }
    }
`

export default function Details({ data }) {
  const {
    id,
    poster_path,
    title,
    release_date,
    popularity,
    adult,
    overview
  } = data;

  return (
    <DetailsStyles>
      {poster_path
        ? <img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt={title} />
        : <img src="https://via.placeholder.com/185x278/000000/FFFFFF/?text=Poster+Unavailable" alt={title} />
      }

      <h2>{title} ({setYear(release_date)})</h2>
      {popularity ?
        <div className="ratings">
          <img src="images/popularity-icon.png" alt="Popularity" /> <span>{popularity}</span>
        </div>
        : <span>No ratings available</span>}
      {adult && <p>Adult rated</p>}
      {overview ? <p>{overview}</p> : <span>No description available</span>}
    </DetailsStyles>
  )
}
