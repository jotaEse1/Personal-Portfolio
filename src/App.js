import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Toolkit from './components/Toolkit';
import Menu from './components/Menu';
import Contact from './components/Contact';
import {motion, AnimatePresence} from 'framer-motion';
import { imageVariant } from './animations/variants';
import { useState } from 'react';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="container">
      <motion.div 
          className='image'
          initial='hidden'
          animate='visible'
          variants={imageVariant}
          id='home'
      >
          <Navbar setMenuVisible={setMenuVisible} />
          <Presentation />
      </motion.div>
      <AboutMe />
      <Projects />
      <Toolkit />
      <Contact />
      <AnimatePresence>
        {menuVisible && <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
