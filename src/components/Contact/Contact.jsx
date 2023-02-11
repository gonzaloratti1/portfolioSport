import React from 'react'



const Contact = () => {
    return (
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Contactame</h2>
            <span className='section__subtitle'>Envia un mensaje</span>

            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Entremos en contacto</h3>
                    <div className='contact__info'>
                        <div className='contact__card'>
                            <i className='bx bx contact__card-icon'></i>
                            <h3 className='contact__card-title'>Email</h3>
                            <span className='contact__card-data'>user@gmail.com</span>
                            <a href='gonzaloratti1@gmail.com' className='contact__button'>Escribe<i class='bx bx-envelope' ></i></a>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bx contact__card-icon'></i>
                            <h3 className='contact__card-title'>Whatsapp</h3>
                            <span className='contact__card-data'>1561370256</span>

                            <a href='https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!' className='contact__button'>Escribe<i class="uil uil-whatsapp"></i></a>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bx contact__card-icon'></i>
                            <h3 className='contact__card-title'>Facebook</h3>
                            <span className='contact__card-data'>user.123</span>

                            <a href='' className='contact__button'>Escribe<i class='bx bxl-facebook'></i></a>
                        </div>
                    </div>
                </div>
                <div className='contact__content'>
                    <h3 className='contact__title'>Escribe tu propuesta</h3>
                    <form className='contact__form'>
                        <div className='contact__form-div'>
                            <label htmlFor='' className='contact__form-tag'>Nombre</label>
                            <input type="text" name="name"></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact