import React, { Component } from 'react';
import NavBar from './NavBar'
import logo1 from '../img/logo1.png'
import Header from './Header'
import bg1 from '../img/logo2.png'
import android1 from '../img/android1.png'
import Company from './Company'
const text1 = <ruby><span className="underline" style={{ fontSize: '0.75em' }}>Устройства</span><rt className='text-blue small-text'>ANDROID</rt></ruby>
const text = <p style={{ fontSize: '1em'}}>
  {text1} Android давно захватили
  сердца миллиардов пользователей.
<p style={{ fontSize: '1em', marginTop: '30px'}}>
    Ваше приложение, созданное нашими
    разработчиками - эффективный
    маркетинговый инструмент,
    направленнный на очень широкую
    аудиторию.
</p></p>
export default class Service extends Component {
  render() {
    return (
      <div>
        <NavBar img={logo1} />
        <Header logo={bg1} />
        <Company android={android1}
          text={text}  />
      </div>
    )
  }
}
