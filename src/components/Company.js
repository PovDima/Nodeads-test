import React from 'react'
import './style/Company.css'

const Company = props => (
  <div className='container1'>
    <div className='text'>
      <span className='text-blue'>{props.title || ''}</span>
      <div className='small-text'>
        {props.text}
      </div>
    </div>
    <img src={props.android} width='30%' height='20%' />

  </div>

);
export default Company