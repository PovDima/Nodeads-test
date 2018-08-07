import React, { Component } from 'react';
import NavBar from './NavBar'
import Header from './Header'
import Company from './Company'
import Footer from './Footer'
import logo from '../img/logo.png'
import android from '../img/android.png'
import bg from '../img/footer.png'
export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar  />
        <Header logo={logo} text={'Разработка програмного обеспечения'} />
        <Company android={android} title={'О НАШЕЙ КОМПАНИИ'} text={<p style={{fontSize:'1em'}}>NodeAds - молодая украинская IT-компания, разрабатывающая программное обеспечение для наиболее популярных платформ.</p>} />
        <Footer bg={bg} />
      </div>
    );
  }
}

