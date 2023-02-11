import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Qualification from './components/Qualification/Qualification'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <Header />
      <div className='main'>
        <Home />
        <About />
        {/* Diplomas */}
        {/* <Qualification/> */}
        {/* FOTOS */}
        {/* <Contact/> */}
        <Footer/>
      </div>

    </>
  )
}

export default App
