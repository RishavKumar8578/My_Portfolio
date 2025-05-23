import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import MyProject from './components/MyProject'
import Footer from './components/Footer'
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Certificates from './components/Certificates';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div>
          <Header />

      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="myproject">
        <MyProject />
      </section>

      <section id="certificates">
        <Certificates />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    
      <section id="6">
        <Footer />
      </section>
      </div>
      
     
    </>
  )
}

export default App
