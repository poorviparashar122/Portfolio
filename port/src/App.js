
import React, {useEffect } from 'react';
import logo from './logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css"



import './App.css';
import Aos from 'aos';
import { Navbar } from './componet/Navbar';
import { Home } from './componet/Home';
import { About } from './componet/About';
import { Footer } from './componet/Footer';
import { Skills } from './componet/Skills';
import { Project } from './componet/Project';

function App() {
  useEffect(()=>{
   Aos.init({
    duration: 2000,
   })
  },[])
  return(
    <>
    <Navbar/>
    <Home/>
     <About/>
     <Skills/>
     <Project/>
     <Footer/> 

   </>
  )
   
}

export default App;


