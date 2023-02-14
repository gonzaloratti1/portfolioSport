import React from 'react'
import "./Home.css"

const Social = () => {
  return (
    <div className='home__social'>
        <a href='https://www.instagram.com/' className='home__social-icon' target="_blank">
            <i className='uil uil-instagram'></i>
        </a>
        <a   className='home__social-icon' target="_blank">
        <i className="uil uil-envelope"></i>
        </a>
        <a href='https://www.facebook.com/'  className='home__social-icon' target="_blank">
            <i className='uil uil-facebook'></i>
        </a>
    </div>
  )
}

export default Social