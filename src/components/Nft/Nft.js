import React from 'react'
import Nft1 from '../../assets/nft3.png'
import Nfts from '../../assets/nft4.png'
import Nft2 from '../../assets/nft5.png'
import Nft3 from '../../assets/nft7.png'
import Line from '../../assets/line.svg'

function Nft() {
  return (
    <div className='nft-sec'>

        <div className='container-fluid pt-left'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='nft'>
                        <img src={Nft1} alt=""/>
                        <div className='d-flex btn-box'>
                            <a href="/" className='nft-btn'>Ai sniper bot</a>
                            <img src={Line} alt="" className='line-b'/>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                <div className='nft'>
                <img src={Nft2} alt=""/>
                <div className='d-flex  btn-box' style={{gap:'2.5rem'}}>
                            <a href="/" className='nft-btn'>Market research bot</a>
                            <img src={Line} alt="" className='line-b' style={{marginLeft:'5px' ,marginTop:'2px'}}/>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                <div className='nft'>
                <img src={Nfts} alt="" style={{padding: '15px'}}/>
                <div className='d-flex  btn-box'style={{gap:'3rem'}} >
                            <a href="/" className='nft-btn'>Shaiba Chatbot</a>
                            <img src={Line} alt="" className='line-b' style={{marginLeft:'5px' ,marginTop:'2px'}}/>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                <div className='nft'>
                <img src={Nft3} alt="" style={{padding: '10px'}}/>
                <div className='d-flex  btn-box' style={{gap:'10px'}}>
                            <a href="/" className='nft-btn'>Personal companion bot</a>
                            <img src={Line} alt="" className='line-b' style={{marginLeft:'11px' ,marginTop:'2px'}}/>
                        </div>
                    </div>
                </div>
                 
            </div>
            
        </div>
    </div>
  )
}

export default Nft