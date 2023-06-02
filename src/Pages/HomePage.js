import React from 'react'
import Image from 'react-bootstrap/Image'
import { CoffeeCarousel } from '../Components/CoffeeCarousel'
import './HomePage.scss'

export const HomePage = () => {
  return (
    <div className='HomePage'>
        <div className='Center_Content'>
          <div className='HomePage_Header'>
              Welcome
          </div>
          <CoffeeCarousel />
          <br />
          <div className='HomePage_Band_Header'>
              Live Music Every Friday Night
          </div>
          <div className='HomePage_Band'>
              <Image width='800px' rounded={true} fluid={true} src='band.jpg' alt='band' />
          </div>
          <br /><br />
        </div>
    
    </div>
  )
}
