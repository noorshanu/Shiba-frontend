import Light from './assets/light.svg'
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Nft from './components/Nft/Nft';
import Mobfooter from './components/Mobfooter/Mobfooter';
import React, { useEffect, useState } from 'react'
import Loadar from './components/Loader/Loadar';

function App() {
  const [loading,setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  return (
    <div>
     {
      loading ?
     <Loadar/>
      :
      <div data-aos="zoom-out" data-aos-duration="1500" data-aos-easing="ease-in-sine" style={{overflowX:'hidden'}}>
    <div className='main-bg' >
       <img src={Light} alt="" className="lig-4"/>
      <Navbar/>
      <Hero/>
      <Nft/>
    </div>
    <Mobfooter/>
    </div>
     }
    </div>
    
  );
}

export default App;
