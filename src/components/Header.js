import React from 'react'
import './style/Header.css'

const Header = props => (
  <div className='container'>
    <img src={props.logo} width='80%' />
    <span className='underline'>
      {props.text}
    </span>
  </div>

);
export default Header