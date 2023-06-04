import React from 'react'
import { formatUSD } from '../Util/Money'
import { OrderTable } from './OrderTable'
import '../Styles/OrderSection.scss'

export const OrderSection = ({drinksTotal, drinksOrder, foodTotal, foodOrder}) => {
  return (
    <div className='OrderSection'>
        <div className='OrderSection_Title'>
            Your Order
        </div>
        {
           (drinksTotal > 0 || foodTotal > 0) && (
            <>
                <strong>Drinks</strong>
                <OrderTable completeOrder={drinksOrder}/>

                <strong>Food</strong>
                <OrderTable completeOrder={foodOrder}/>
            </>
        )}
        {
            drinksTotal === 0 && foodTotal === 0 &&
            <> 
                Your cart is empty. 
            </>
}
        <hr />
        <div className='OrderSection_Total'>
            Total:<span>{ formatUSD(drinksTotal + foodTotal )}</span>
        </div>
    </div>
  )
}
