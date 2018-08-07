import React from 'react'
import './style/Footer.css'

const Footer = props => (
  <div className='container2' style={{ backgroundImage: `url(${props.bg})` }}>
    <div className='bg-color' ><p style={{fontSize:'1em'}}>Мы создаем мультиплатформенные приложения, используя только <span className='color-text'>современные технологии разработки.</span> Это помогает привлечь максимальное количество потенциальных клиентов, действительно заинтересованных в продукте.
   </p> </div>
  </div>

);
export default Footer