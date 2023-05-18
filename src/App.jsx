import React from 'react'
import './App.css'
import { Navbar } from './Navbar'
import { SectionDivide } from './SectionDivide'
import {Section2} from './Section2'
import { Logo } from './Logo'
import { Section3 } from './section3'
import { Section4 } from './Section4'
import { Section5 } from './Section5'
import { Section6 } from './Section6'
import { Floating } from './floating'
import { Footer } from './Footer'


function App() {
  

  return (
    <>
     <Navbar/>
     <SectionDivide/>
     <Section2/>
     <Logo/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section6/>
     <Floating/>
     <Footer/>
    </>
  )
}

export default App
