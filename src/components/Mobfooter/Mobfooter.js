import React from 'react'
import Logo from '../../assets/logo.png'
import {FaTelegramPlane,FaFacebookSquare,FaTwitter} from 'react-icons/fa'
import {RiRecordCircleLine} from 'react-icons/ri'
import {SiGitbook} from  'react-icons/si'
import Light from '../../assets/mob/light.png'
function Mobfooter() {
  return (
    <section className='footer pt-10'>
        <div className='container'>
        <div className='text-white d-flex align-items-center  margin-auto justify-content-center'>
            <img src={Logo} alt="" style={{height:'45px'}}/>
            <p className='logo-text'>shAIba</p>
        </div>
<div className='foot-social d-flex gap-2 justify-content-center'>
    <a href="/"><FaTelegramPlane/></a>
    <a href="/"><RiRecordCircleLine/></a>
    <a href="/"><FaFacebookSquare/></a>
    <a href="/"><FaTwitter/></a>
    <a href="/"><FaTelegramPlane/></a>
    <a href="/"><FaTelegramPlane/></a>
    <a href="/"><SiGitbook/></a>

</div>
<div className='text-center'>
<img src={Light} alt="" className="lig"/>
<div>
    <p className='text-white'>© 2023 | shAIba|s All Rights Reserved</p>
</div>
</div>
        </div>
    </section>
  )
}

export default Mobfooter