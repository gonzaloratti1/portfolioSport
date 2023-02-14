import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import PlayerExp from './components/JugExperience/PlayerExp'

function App() {


  return (
    <>
      <Header />
      <div className='main'>
        <Home />
        <About />
        <PlayerExp/>
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
