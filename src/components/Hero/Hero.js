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
            <img src={HBox} alt='new' className="hb-b"/>
            <div className="box-hero">
            <h1 className="logo-txt logo-txt2 text-6xl">
              Revolutionizing the crypto world with 
              shAIba
             
            </h1>
            {/* <h1 className="logo-txt logo-txt2 text-6xl">
              Revolutionizing the crypto world with shAIba
             
            </h1>
            <h1 className="logo-txt logo-txt2 text-6xl">
              Revolutionizing the crypto world with shAIba
             
            </h1> */}
            <div className="d-flex gap-4 hero-btns">
                <a href="/" className="buy">Buy</a>

                <a href="/" className="buy">Chart</a>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
          <div className="hero-box">
            <img src={Light} alt="" className="lig-1"/>
            <p>
              Welcome to Shaiba, the ultimate Ai for the crypto community. With
              real-time information on coins, market trends, and popular Twitter
              users, Shaiba is the tool you need to stay ahead of the game. Our
              innovative token provides users with access to premium features,
              governance proposals, and revenue sharing through our
              revolutionary DAO. Join the Shaiba revolution today and start
              navigating the crypto world with ease.
            </p>
          
          </div>
          <div className="d-flex  com">
                <p>Community</p>
                <a href="/" className="tweet"><AiFillTwitterCircle/></a>
                <a href="/" className="telegram"><BsTelegram/></a>
            </div>
          </div>
      
          </div>
      </div>
    </section>
  );
}

export default Hero;
