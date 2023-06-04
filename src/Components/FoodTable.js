import React from 'react'
import { useRecoilState } from 'recoil'
import { capitalize } from '../Util/Strings'
import { orderedFood } from '../Util/Atoms'
import { FoodTableRow } from './FoodTableRow'
import { FoodPrices } from '../Util/App.Config'
import '../Styles/FoodTable.scss'

export const FoodTable = () => {
    const [theOrderedFood, setOrderedFood] = useRecoilState(orderedFood)

    const onHandleClick = (item, value) => {
        const Food = {...theOrderedFood}
        if (value === -1 && Food[item] === 0) {
            return;
        }
        Food[item] += value
        setOrderedFood(Food)
    }

    return (
        <div className='FoodTable'>
            <table className='FoodTable_Table'>
                <tbody>
                    {
                        FoodPrices.map(i => {
                            return <FoodTableRow 
                                key={ i.id }
                                item={ i.type }
                                displayName={ capitalize(i.type) }
                                theOrderedFood={ theOrderedFood } 
                                onHandleClick={ (item, value) => onHandleClick(item, value) }
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
