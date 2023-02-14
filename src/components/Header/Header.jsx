import React from 'react'
import "./Header.css"
import { useState } from 'react';

const Header = () => {

  // TOGGLEMENU
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <header className='header'>
        <nav className='nav container py-32 w-full lg:h-screen'>
            <a href='index.html' className='nav__logo'>Hugo Daniel Lopez</a>
            <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
              <ul className='nav__list grid'>

                <li className='nav__item'>
                  <a href='#home' className='nav__link'>
                    <i className='uil uil-estate nav__icon'></i>Datos Personales
                  </a>
                </li>

                <li className="nav__item">
                  <a href='' className='nav__link'>
                    <i className='uil uil-user nav__icon'></i> Cursos
                  </a>
                </li>

                <li className='nav__item'>
                  <a href='' className='nav__link'>
                    <i className='uil uil-file-alt nav__icon'></i> Trayectoria
                  </a>
                </li>

                <li className='nav__item'>
                  <a href='' className='nav__link'>
                    <i className='uil uil-message nav__icon'></i> Experiencia
                  </a>
                </li>
                <li className='nav__item'>
                  <a href='' className='nav__link'>
                    <i className='uil uil-message nav__icon'></i> Fotos
                  </a>
                </li>
              </ul>
              <i className='uil uil-times nav__close' onClick={() => showMenu(!toggle)}></i>
            </div>
            <div className='nav__toggle' onClick={() => showMenu(!toggle)}>
              <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
    </>
   
  )
}

export default Header