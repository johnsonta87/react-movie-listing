import React from 'react'
import Header from './Header';

export default function Layout(props) {
  const { children, title = 'DigitalSharx' } = props;
  return (
    <div>
      <Header />

      {children}
    </div>
  )
}
