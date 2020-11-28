import React from 'react'
import styled from 'styled-components'

const RatingsStyles = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 2;

  .percent {
    font-size: 10px;
    position: relative;
    top: -1px;
  }

  .ring {
    width: 30px;
    height: 30px;
    border: 1px solid ${props => props.theme.white};
    border-radius:  50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;

    &.green {
      background-color: #32CD32;
    }
    &.yellow {
      background-color: #FFFF00;
    }
    &.red {
      background-color: #DC143C;
    }
  }
`

export default function Ratings({ ratings }) {
  let ratingsClass = null;

  if (ratings > 70) {
    ratingsClass = ' green'
  }
  if (ratings < 71 && ratings > 45) {
    ratingsClass = ' yellow'
  }
  if (ratings < 46 && ratings > 0) {
    ratingsClass = ' red'
  }

  return (
    <RatingsStyles>
      <div className={`ring${ratingsClass}`}>
        {ratings}<span className="percent">%</span>
      </div>
    </RatingsStyles>
  )
}
