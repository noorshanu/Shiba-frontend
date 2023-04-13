import React from "react";
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import HBox from '../../assets/h-box.png'
import Light from '../../assets/light.svg'
import Mask from '../../assets/circle.svg'


function Hero() {
  return (
    <section className="hero-sect">
 <img src={Mask} alt="" className="lig-3"/>
      <div className="container-fluid pt-left">
        <div className="row align-items-center">
          <div className="col-md-7 " >
          <img src={Light} alt="" className="lig-2"/>
            {/* <img src={HBox} alt='new' className="hb-b"/> */}
            <div className="box-hero">
            <h1 className="logo-txt logo-txt2 text-6xl">
              Revolutionizing the crypto world with 
              shAIba
             
            </h1>
    
            <div className="d-flex gap-4 hero-btns">
                <a href="/" className="buy">Buy <span className="tba">(TBA)</span></a>

                <a href="/" className="buy">Chart <span className="tba">(TBA)</span></a>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
          <div className="hero-box">
            <img src={Light} alt="" className="lig-1"/>
            <p>
            Welcome to $SHAI world - we deliver 4 AI pocket telegram bots that make operating in the web3 world much effortless. With real-time information on coins, market trends, and popular Twitter users, shAIba is the tool you need to stay ahead of the game. And it’s not all! The $SHAI token provides Real-Yield opportunities to its holders. Join the AI revolution with $SHAI!
            </p>
          
          </div>
          <div className="d-flex  com">
                <p>Community</p>
                <a href="https://twitter.com/shaibaio?s=21&t=-rzvYinChENnkQSovqC9uw" className="tweet"><AiFillTwitterCircle/></a>
                <a href="https://t.me/shaibaio" className="telegram"><BsTelegram/></a>
            </div>
          </div>
      
          </div>
      </div>
    </section>
  );
}

export default Hero;
