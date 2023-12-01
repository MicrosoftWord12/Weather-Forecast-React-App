import React from 'react'
import NavigationProps from '../../Types/PropTypes/NavigationProps'
import { NavigationButton } from './NavigationButton'
import NavigationPropList from '../../Types/PropTypes/NavigationProps'

export const NavigationBar = ({ NavigationPropList }: NavigationPropList) => {
  return (
    <div>
        <ul className='flex flex-row-reverse bg-gray-400 w-full'>
            {NavigationPropList.map((item) => (
                <NavigationButton key={item.id} id={item.id} Name={item.Name} Endpoint={item.Endpoint} />
            ))}
        </ul>
    </div>
  )
}

export default NavigationBar