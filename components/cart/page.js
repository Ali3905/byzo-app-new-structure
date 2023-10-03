"use client"

import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const page = () => {

  
  const [smallScreen, setSmallScrenn] = useState(null)
    
  useEffect(()=>{
    window.addEventListener('resize', ()=> {
      if(window.innerWidth < 769){
        setSmallScrenn(true)
      }else{
        setSmallScrenn(false)
      }
      })

    if (smallScreen) {
      setSmallScrenn(true)
    }else{
      setSmallScrenn(false)
    }
  },[])
  return (
    <div>
    {!smallScreen && <NavBar/>}
      <Cart/>
    <Footer/>
    </div>
  )
}

export default page
