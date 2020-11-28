import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.primaryColor};
  height: 56px;
  width: 100vw;
  z-index: 10;
  transition: top 0.2s linear;

  ul {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      border-width: 0;
      outline: 0;
      flex: 0 0 auto;
      list-style: none;
      position: relative;

      a {
        padding: .5rem .5rem;
        outline: 0;
        color: inherit;
        display: -ms-flexbox;
        display: flex;
        flex-direction: row;
        flex: 1 1 auto;
        align-items: center;
        position: relative;
        white-space: nowrap;
        cursor: pointer;
        color: ${props => props.theme.white};
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
`

export default function Header() {
  return (
    <HeaderStyles>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/NowPlaying">
            <a>Now Playing</a>
          </Link>
        </li>
      </ul>
    </HeaderStyles>
  )
}
