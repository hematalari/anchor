import React from 'react';
import Nav from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Scroll from './Components/Scroll/Scroll';
import Content from './Components/Content/Content';
import accordance_data from './data/accordance'
import Projects from './Components/Projects/Projects';
import slider_info from './data/slider';
import Collab from './Components/Collab/Collab';
import collab_info from './data/info';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  
  return (
    <>
        <Nav />
        <Hero />
        <Scroll />
        <Content data={accordance_data}/>
        <Projects slide={slider_info}/>
        <Collab  info={collab_info} />
        <Projects slide={slider_info}/>
        <Contact />
        <Footer />
    </>
  )
}

export default App
