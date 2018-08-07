import React from 'react'
import './style/NavBar.css'
import { Link } from 'react-router-dom'
class NavBar extends React.Component{
  constructor(props){
    super(props);
   this.isActive=this.isActive.bind(this); 
  }
  isActive(e)
  {
    e.target.className='underline';
  }
  render(){
    return (
    <ul>
      <li><Link to='/'>О КОМПАНИИ</Link><div className='underline'></div></li>
      <li><Link to='/Service' >СЕРВИСЫ</Link><div onClick={this.isActive}></div></li>
      <li><img src={this.props.img} /></li>
      <li>КОМАНДА<div onClick={this.isActive}></div></li>
      <li>ПОРТФОЛИО<div onClick={this.isActive}></div></li>
    </ul>
    )
  }
};
export default NavBar;