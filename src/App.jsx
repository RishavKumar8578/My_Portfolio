import { useState } from 'react'

import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import MyProject from './components/MyProject'
import Expertise from './components/Expertise'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Header />
      <Banner />
      <About />
      <MyProject />
      <Expertise />
      <Footer />
    </>
  )
}

export default App
