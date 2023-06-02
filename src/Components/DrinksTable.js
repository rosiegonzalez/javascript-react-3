import React from 'react'
import { useRecoilState } from 'recoil'
import { capitalize } from '../Util/Strings'
import { orderedDrinks } from '../Util/Atoms'
import { DrinkTableRow } from './DrinkTableRow'
import { drinkPrices } from '../Util/App.Config'
import '../Styles/DrinksTable.scss'

export const DrinksTable = () => {
    const [theOrderedDrinks, setOrderedDrinks] = useRecoilState(orderedDrinks)

    const onHandleClick = (item, value) => {
        const drinks = {...theOrderedDrinks}
        if (value === -1 && drinks[item] === 0) {
            return;
        }
        drinks[item] += value
        setOrderedDrinks(drinks)
    }

    return (
        <div className='DrinksTable'>
            <table className='DrinkTable_Table'>
                <tbody>
                    {
                        drinkPrices.map(i => {
                            return <DrinkTableRow 
                                key={ i.id }
                                item={ i.type }
                                displayName={ capitalize(i.type) }
                                theOrderedDrinks={ theOrderedDrinks } 
                                onHandleClick={ (item, value) => onHandleClick(item, value) }
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
