// import { useState } from 'react'
import Header from './components/header/header'
import Home from './components/main/Home'
import Tallent from './components/tallent/tallent'
import TipsGols from './components/tipsGols/tipsGols'
import Plans from './components/plans/plans'
import Questions from './components/Questions/questions'
import Footer from './components/footer/footer'
import  ScrollTop from './components/scrollTop/scrollTop'
import ImageSlider from './components/imageSlider/imageSlider'
// import  Scroll from './components/scroll/scroll'
// import Transformation from './components/transformation/transformation'
import './index.css'

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Tallent />
      <ImageSlider />
      <TipsGols />
      <Plans />
      <Questions/>
      <Footer />
      <ScrollTop/>
      
      {/* <Transformation/> */}
    </div>
  )
}

export default App
