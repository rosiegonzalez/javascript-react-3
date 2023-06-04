import React from 'react'
import './FoodPage.scss'
import { FoodTable } from '../Components/FoodTable'
import { Image } from '../Components/FoodPage'

export const FoodPage = () => {
  return (
    <div className='FoodPage'>
       <div className='Center_Content'>
          <div className='FoodPage_Header'>
                Food 
            </div>
            <div className='FoodPage_Content'>
                    <FoodTable />
                </div>
                <div className='FoodPage_Content'>
                    <div className='FoodPage_Pix'>
                        <Image width='800px' rounded={true} fluid={true} src='sandwich.jpg' alt='sandwich' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='crepes.jpg' alt='crepes' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='pancakes.jpg' alt='pancakes' />
                        <br /><br/>
                        <Image width='800px' rounded={true} fluid={true} src='toast.jpg' alt='toast' /> 
                      
                        {/* // added milk image here // */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
  }