import React from 'react'
import { INavProp } from '../../Types/PropTypes/NavigationProps'

export const NavigationButton = ({ id, Name, Endpoint }: INavProp) => {
  return (
    <li className='m-5'>
        <a key={id} className="p-3 bg-gray-300 rounded-lg hover:bg-gray-600" href={Endpoint}>{Name}</a>
    </li>
  )
}
